"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Loader2, CheckCircle, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons/social";
import { Container } from "@/components/layout/container";
import { MotionSection, StaggerContainer, StaggerItem } from "@/components/motion";
import { SectionHeader } from "@/components/shared/section-header";
import { GradientText } from "@/components/shared/gradient-text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { contactSchema, type ContactFormValues } from "@/lib/validations/contact";
import { personalInfo } from "@/lib/data/site";
import { toast } from "sonner";
import { Forminit } from 'forminit';

const forminit = new Forminit();



const contactMethods = [
  {
    name: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
  {
    name: "LinkedIn",
    value: "Connect on LinkedIn",
    href: personalInfo.linkedin,
    icon: LinkedinIcon,
  },
  {
    name: "GitHub",
    value: "View my work",
    href: personalInfo.github,
    icon: GithubIcon,
  },
  {
    name: "Twitter",
    value: "Follow me",
    href: personalInfo.twitter,
    icon: TwitterIcon,
  },
  {
    name: "WhatsApp",
    value: "Chat on WhatsApp",
    href: personalInfo.whatsapp,
    icon: MessageCircle,
  },
  {
    name: "Location",
    value: personalInfo.location,
    href: "#",
    icon: MapPin,
  },
];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // const result = await response.json();
      //  const formData:any = new FormData(data as any);
      //  const { data:response, error } = await forminit.submit('YOUR_FORM_ID', formData);


      if (response) {
        setIsSuccess(true);
        form.reset();
        toast.success("Message sent successfully! I'll get back to you soon.");
      } else {
        toast.error(response || "Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[150px]" />

      <Container className="relative z-10">
        <MotionSection>
          <SectionHeader
            eyebrow="Contact"
            title={
              <>
                Let&apos;s build something <GradientText>great together</GradientText>
              </>
            }
            description="Have a project, opportunity, or question? I'd love to hear from you."
          />
        </MotionSection>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Contact info */}
          <MotionSection delay={0.1} className="lg:col-span-5">
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/[0.08] bg-surface/30 p-6">
                <h3 className="font-heading text-xl font-bold text-foreground">Contact Information</h3>
                <p className="mt-2 text-muted">
                  Prefer email? Send me a message and I will respond within 24 hours.
                </p>
              </div>

              <StaggerContainer className="space-y-3" staggerDelay={0.08}>
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <StaggerItem key={method.name}>
                      <a
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 rounded-xl border border-white/[0.08] bg-surface/30 p-4 transition-all hover:border-primary/30 hover:bg-surface/50"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm text-muted">{method.name}</div>
                          <div className="font-medium text-foreground">{method.value}</div>
                        </div>
                      </a>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>
          </MotionSection>

          {/* Contact form */}
          <MotionSection delay={0.2} className="lg:col-span-7">
            <div className="rounded-2xl border border-white/[0.08] bg-surface/30 p-6 md:p-8">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">Message Sent!</h3>
                  <p className="mt-2 text-muted">
                    Thank you for reaching out. I will get back to you as soon as possible.
                  </p>
                  <Button
                    onClick={() => setIsSuccess(false)}
                    variant="outline"
                    className="mt-6 border-white/[0.08] bg-transparent"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your name"
                                {...field}
                                className="border-white/[0.08] bg-surface/50 text-foreground placeholder:text-muted"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="you@example.com"
                                {...field}
                                className="border-white/[0.08] bg-surface/50 text-foreground placeholder:text-muted"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="What's this about?"
                              {...field}
                              className="border-white/[0.08] bg-surface/50 text-foreground placeholder:text-muted"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your project, goals, and timeline..."
                              rows={6}
                              {...field}
                              className="border-white/[0.08] bg-surface/50 text-foreground placeholder:text-muted"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Honeypot field */}
                    <div className="hidden">
                      <Label htmlFor="website">Website</Label>
                      <Input id="website" {...form.register("website")} tabIndex={-1} autoComplete="off" />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Mail className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </MotionSection>
        </div>
      </Container>
    </section>
  );
}
