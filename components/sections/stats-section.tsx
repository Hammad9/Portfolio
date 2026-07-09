import { Container } from "@/components/layout/container";
import { MotionSection, StaggerContainer, StaggerItem } from "@/components/motion";
import { StatCard } from "@/components/shared/stat-card";
import { stats } from "@/lib/data/site";

export function StatsSection() {
  return (
    <section id="stats" className="relative border-y border-white/[0.08] bg-surface/30 py-16">
      <Container>
        <MotionSection>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {stats.map((stat, index) => (
              <StaggerItem key={stat.label}>
                <StatCard
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  delay={index * 0.1}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </MotionSection>
      </Container>
    </section>
  );
}
