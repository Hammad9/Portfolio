import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons/social";
import { Mail, MapPin } from "lucide-react";
import { Container } from "@/components/layout/container";
import { navigation, siteConfig } from "@/lib/constants";
import { personalInfo } from "@/lib/data/site";

const socialLinks = [
  { name: "GitHub", href: personalInfo.github, icon: GithubIcon },
  { name: "LinkedIn", href: personalInfo.linkedin, icon: LinkedinIcon },
  { name: "Twitter", href: personalInfo.twitter, icon: TwitterIcon },
  { name: "Email", href: `mailto:${personalInfo.email}`, icon: Mail },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-surface/30">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block font-heading text-2xl font-bold text-foreground">
              Muhammad Hammad
            </Link>
            <p className="mt-4 max-w-md text-muted">
              Software Engineer, Frontend Developer, and Business Automation Specialist helping
              organizations build scalable products and automate workflows.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-4 w-4 text-primary" />
              {personalInfo.location}
            </div>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-surface text-muted transition-all hover:border-primary/50 hover:text-primary"
                  aria-label={link.name}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.footer.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm text-muted transition-colors hover:text-primary"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-primary"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-primary"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-primary"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] py-8 md:flex-row">
          <p className="text-sm text-muted">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted">
            Designed & built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </Container>
    </footer>
  );
}
