import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons/social";
import { Mail } from "lucide-react";
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
        <div className="flex flex-col items-start justify-between gap-8 py-10 md:flex-row md:items-center">
          {/* Brand + social */}
          <div className="space-y-3">
            <Link href="/" className="font-heading text-xl font-bold text-foreground">
              Muhammad Hammad
            </Link>
            <p className="max-w-xs text-sm text-muted">
              Software Engineer, Frontend Developer, and Business Automation Specialist.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-surface text-muted transition-all hover:border-primary/50 hover:text-primary"
                  aria-label={link.name}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          
          {/* Contact */}
  
        </div>

        <div className="border-t border-white/[0.08] py-6 text-center md:text-left">
          <p className="text-sm text-muted">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
