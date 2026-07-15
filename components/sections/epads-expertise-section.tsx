import { Container } from "@/components/layout/container";
import { MotionSection, StaggerContainer, StaggerItem } from "@/components/motion";
import { SectionHeader } from "@/components/shared/section-header";
import { GradientText } from "@/components/shared/gradient-text";
import { GlowCard } from "@/components/shared/glow-card";
import { epadsServices, epadsMistakes, epadsBestPractices } from "@/lib/data/epads";
import { AlertTriangle, CheckCircle2, Lightbulb } from "lucide-react";

export function EpadsExpertiseSection() {
  return (
    <section id="epads" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-secondary/10 blur-[150px]" />

      <Container className="relative z-10">
        <MotionSection>
          <SectionHeader
            eyebrow="ePADS Expertise"
            title={
              <>
                Navigate Pakistan&apos;s <GradientText>digital procurement</GradientText> ecosystem
              </>
            }
            description="From vendor registration to bid submission, I help organizations participate confidently in Pakistan's public procurement process."
          />
        </MotionSection>

        {/* Services grid */}
        <MotionSection delay={0.1}>
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
            {epadsServices.map((service) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={service.id}>
                  <GlowCard className="h-full">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">{service.title}</h3>
                    <p className="mt-2 text-muted">{service.description}</p>
                    <ul className="mt-4 space-y-2">
                      {service.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </GlowCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </MotionSection>

        {/* Mistakes and best practices */}
      </Container>
    </section>
  );
}
