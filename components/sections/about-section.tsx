import { Container } from "@/components/layout/container";
import { MotionSection, StaggerContainer, StaggerItem } from "@/components/motion";
import { SectionHeader } from "@/components/shared/section-header";
import { GradientText } from "@/components/shared/gradient-text";
import { aboutTimeline, aboutContent } from "@/lib/data/about";

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-secondary/10 blur-[150px]" />

      <Container>
        <MotionSection>
          <SectionHeader
            eyebrow="About Me"
            title={
              <>
                Engineer by trade, <GradientText>business problem-solver</GradientText> by choice
              </>
            }
            description="I combine technical depth with business understanding to build products that create measurable value."
          />
        </MotionSection>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Story */}
          <MotionSection delay={0.1}>
            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                My Journey
              </h3>
              <div className="space-y-4 text-lg leading-relaxed text-muted">
                {aboutContent.journey.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-surface/50 p-6">
                <h4 className="font-heading text-lg font-semibold text-primary">My Philosophy</h4>
                <p className="mt-2 italic text-foreground">&ldquo;{aboutContent.philosophy}&rdquo;</p>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-surface/50 p-6">
                <h4 className="font-heading text-lg font-semibold text-accent">What Drives Me</h4>
                <p className="mt-2 text-foreground">{aboutContent.passion}</p>
              </div>
            </div>
          </MotionSection>

          {/* Timeline */}
          <MotionSection delay={0.2}>
            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                Timeline
              </h3>

              <StaggerContainer className="relative space-y-8" staggerDelay={0.1}>
                {aboutTimeline.map((event, index) => (
                  <StaggerItem key={event.id}>
                    <div className="relative pl-8">
                      {index !== aboutTimeline.length - 1 && (
                        <div className="absolute left-[11px] top-8 h-[calc(100%+2rem)] w-px bg-gradient-to-b from-primary/50 to-transparent" />
                      )}
                      <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-2 border-primary bg-background">
                        <div className="absolute inset-1 rounded-full bg-primary" />
                      </div>

                      <div className="rounded-xl border border-white/[0.08] bg-surface/30 p-5 transition-colors hover:border-white/[0.15]">
                        <span className="text-sm font-semibold text-primary">{event.year}</span>
                        <h4 className="mt-1 font-heading text-lg font-semibold text-foreground">{event.title}</h4>
                        <p className="mt-2 text-sm text-muted">{event.description}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </MotionSection>
        </div>
      </Container>
    </section>
  );
}
