import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations/contact";

// In-memory rate limiting (resets on cold start; use Redis for production)
const rateLimit = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimit.get(ip) || [];
  const validTimestamps = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW);

  if (validTimestamps.length >= RATE_LIMIT_MAX) {
    return true;
  }

  validTimestamps.push(now);
  rateLimit.set(ip, validTimestamps);
  return false;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { message: "Too many messages. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Honeypot check
    if (body.website) {
      return NextResponse.json(
        { message: "Message sent successfully." },
        { status: 200 }
      );
    }

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { message: "Invalid form data.", errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = result.data;

    // If Resend is not configured, return a graceful message
    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.FROM_EMAIL;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!resendApiKey || !fromEmail || !contactEmail) {
      // Log the message so it isn't lost during development
      console.log("Contact form submission (Resend not configured):", {
        name,
        email,
        subject,
        message,
      });

      return NextResponse.json(
        {
          message:
            "Message received. The contact form is not fully configured yet, but your message has been logged.",
        },
        { status: 200 }
      );
    }

    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json(
      { message: "Message sent successfully. I'll get back to you soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { message: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
