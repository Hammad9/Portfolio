import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { MotionSection, StaggerContainer, StaggerItem } from "@/components/motion";
import { SectionHeader } from "@/components/shared/section-header";
import { GradientText } from "@/components/shared/gradient-text";
import { GlowCard } from "@/components/shared/glow-card";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo/schemas";
import { siteConfig } from "@/lib/constants";
import { caseStudies } from "@/lib/data/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Detailed case studies showing how Muhammad Hammad solves business problems through Next.js development, FlutterFlow mobile apps, and business automation.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies — Muhammad Hammad",
    description:
      "Detailed case studies showing how Muhammad Hammad solves business problems through Next.js development, FlutterFlow mobile apps, and business automation.",
    type: "website",
    url: "/case-studies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies — Muhammad Hammad",
    description:
      "Detailed case studies showing how Muhammad Hammad solves business problems through Next.js development, FlutterFlow mobile apps, and business automation.",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Case Studies", url: `${siteConfig.url}/case-studies` },
          ]),
        ]}
      />
      <section className="relative overflow-hidden bg-background pb-24 pt-32 md:pb-32">
        <Container>
          <MotionSection>
            <SectionHeader
              eyebrow="Case Studies"
              title={
                <>
                  Business problems, <GradientText>engineered solutions</GradientText>
                </>
              }
              description="Deep dives into real projects, the challenges behind them, and the measurable outcomes that came from thoughtful technology choices."
            />
          </MotionSection>

          <MotionSection delay={0.1}>
            <StaggerContainer className="space-y-8" staggerDelay={0.15}>
              {caseStudies.map((study, index) => (
                <StaggerItem key={study.id}>
                  <GlowCard className="group overflow-hidden p-0">
                    <div className={`grid gap-0 lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                      <div className={`relative aspect-video overflow-hidden lg:aspect-auto ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                        <Image
                          src={study.image}
                          alt={study.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>

                      <div className={`flex flex-col justify-center p-6 md:p-10 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                        <div className="mb-3 flex flex-wrap items-center gap-3">
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {study.industry}
                          </Badge>
                          {study.duration && <span className="text-xs text-muted">{study.duration}</span>}
                        </div>

                        <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                          {study.title}
                        </h2>
                        <p className="mt-3 text-muted">{study.summary}</p>

                        <div className="mt-6">
                          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
                            Results
                          </h4>
                          <ul className="mt-3 space-y-2">
                            {study.results.slice(0, 2).map((result, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted">
                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-success" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link
                          href={`/case-studies/${study.slug}`}
                          className="mt-6 inline-flex items-center font-medium text-primary transition-colors hover:text-primary/80"
                        >
                          Read full case study
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </GlowCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </MotionSection>
        </Container>
      </section>
    </>
  );
}
