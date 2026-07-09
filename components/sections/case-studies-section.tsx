import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { MotionSection, StaggerContainer, StaggerItem } from "@/components/motion";
import { SectionHeader } from "@/components/shared/section-header";
import { GradientText } from "@/components/shared/gradient-text";
import { GlowCard } from "@/components/shared/glow-card";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/data/case-studies";

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="absolute left-0 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[150px]" />

      <Container className="relative z-10">
        <MotionSection>
          <SectionHeader
            eyebrow="Case Studies"
            title={
              <>
                Deep dives into <GradientText>business impact</GradientText>
              </>
            }
            description="Real projects, real challenges, and the measurable results that came from thoughtful technology choices."
          />
        </MotionSection>

        <MotionSection delay={0.1}>
          <StaggerContainer className="space-y-8" staggerDelay={0.15}>
            {caseStudies.map((study, index) => (
              <StaggerItem key={study.id}>
                <GlowCard className="group overflow-hidden p-0">
                  <div className={`grid gap-0 lg:grid-cols-2 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    <div className="relative aspect-video overflow-hidden lg:aspect-auto">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>

                    <div className="flex flex-col justify-center p-6 md:p-10">
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {study.industry}
                        </span>
                        <span className="text-xs text-muted">{study.duration}</span>
                      </div>

                      <h3 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                        {study.title}
                      </h3>
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

                      <Button
                        asChild
                        variant="ghost"
                        className="mt-6 w-fit justify-start px-0 text-primary hover:bg-transparent hover:text-primary/80"
                      >
                        <Link href={`/case-studies/${study.slug}`}>
                          Read case study
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </MotionSection>
      </Container>
    </section>
  );
}
