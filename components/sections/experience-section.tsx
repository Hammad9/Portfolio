import { Container } from "@/components/layout/container";
import { MotionSection, StaggerContainer, StaggerItem } from "@/components/motion";
import { SectionHeader } from "@/components/shared/section-header";
import { GradientText } from "@/components/shared/gradient-text";
import { TimelineItem } from "@/components/shared/timeline-item";
import { experiences } from "@/lib/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative overflow-hidden bg-surface/30 py-24 md:py-32">
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[150px]" />

      <Container className="relative z-10">
        <MotionSection>
          <SectionHeader
            eyebrow="Experience"
            title={
              <>
                Where I&apos;ve <GradientText>learned and delivered</GradientText>
              </>
            }
            description="A track record of shipping software, automating workflows, and helping organizations navigate digital transformation."
          />
        </MotionSection>

        <MotionSection delay={0.1}>
          <StaggerContainer className="mx-auto max-w-3xl space-y-8" staggerDelay={0.15}>
            {experiences.map((experience, index) => (
              <StaggerItem key={experience.id}>
                <TimelineItem
                  experience={experience}
                  isLast={index === experiences.length - 1}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </MotionSection>
      </Container>
    </section>
  );
}
