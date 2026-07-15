import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/layout/back-to-top";
import { ScrollProgress } from "@/components/layout/scroll-progress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  fallback: ["ui-monospace", "monospace"],
});

// TODO: Replace with your actual production domain
const siteUrl = "https://muhammadhammad.dev";

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muhammad Hammad | Software Engineer & Business Automation Specialist",
    template: "%s | Muhammad Hammad",
  },
  description:
    "Muhammad Hammad is a Software Engineer, Frontend Developer, Next.js Developer, React Developer, FlutterFlow Developer, GoHighLevel Automation Specialist, and Digital Procurement & ePADS Consultant based in Pakistan. He builds scalable web applications, FlutterFlow mobile apps, automates business workflows, and helps organizations navigate Pakistan's digital procurement ecosystem.",
  keywords: [
    "Muhammad Hammad",
    "Software Engineer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "FlutterFlow Developer",
    "GoHighLevel Specialist",
    "CRM Automation",
    "ePADS Consultant",
    "Digital Procurement",
    "Pakistan",
    "Business Automation",
    "Tender Management",
    "Web Development",
    "Mobile App Development",
  ],
  authors: [{ name: "Muhammad Hammad", url: siteUrl }],
  creator: "Muhammad Hammad",
  publisher: "Muhammad Hammad",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Muhammad Hammad",
    title: "Muhammad Hammad | Software Engineer & Business Automation Specialist",
    description:
      "I build modern web applications, automate business workflows, and help organizations navigate Pakistan's digital procurement ecosystem.",
    images: [
      {
        url: "/opengraph-default.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Hammad - Software Engineer & Business Automation Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hammad | Software Engineer & Business Automation Specialist",
    description:
      "I build modern web applications, automate business workflows, and help organizations navigate Pakistan's digital procurement ecosystem.",
    images: ["/opengraph-default.png"],
    // TODO: Replace with your actual Twitter/X handle
    creator: "@muhammadhammad",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Providers>
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
