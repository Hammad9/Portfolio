import { Container } from "@/components/layout/container";
import { MotionSection, StaggerContainer, StaggerItem } from "@/components/motion";
import { SectionHeader } from "@/components/shared/section-header";
import { GradientText } from "@/components/shared/gradient-text";
import { WhyUsItem } from "@/components/shared/why-us-item";
import { whyWorkWithMe } from "@/lib/data/about";

export function WhyWorkWithMeSection() {
  return (
    <section id="why-work-with-me" className="relative overflow-hidden bg-background py-24 md:py-32">
      <Container>
        <MotionSection>
          <SectionHeader
            eyebrow="Why Work With Me"
            title={
              <>
                Built for <GradientText>results, not just deliverables</GradientText>
              </>
            }
            description="I partner with clients who want more than code — they want a reliable technical ally focused on business outcomes."
          />
        </MotionSection>

        <MotionSection delay={0.1}>
          <StaggerContainer className="grid gap-5 md:grid-cols-2 lg:grid-cols-4" staggerDelay={0.08}>
            {whyWorkWithMe.map((item) => (
              <StaggerItem key={item.id}>
                <WhyUsItem title={item.title} description={item.description} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </MotionSection>
      </Container>
    </section>
  );
}
