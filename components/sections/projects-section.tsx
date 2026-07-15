import { Container } from "@/components/layout/container";
import { MotionSection, StaggerContainer, StaggerItem } from "@/components/motion";
import { SectionHeader } from "@/components/shared/section-header";
import { GradientText } from "@/components/shared/gradient-text";
import { ProjectCard } from "@/components/shared/project-card";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/lib/data/projects";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative overflow-hidden bg-surface/30 py-24 md:py-32">
      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[150px]" />

      <Container className="relative z-10">
        <MotionSection>
          <SectionHeader
            eyebrow="Projects"
            title={
              <>
                Featured work that <GradientText>solves real problems</GradientText>
              </>
            }
            description="A selection of projects where I turned business challenges into scalable, high-performing digital products across web and mobile."
          />
        </MotionSection>

        <MotionSection delay={0.1}>
          <StaggerContainer className="grid gap-6 md:grid-cols-2" staggerDelay={0.15}>
            {featuredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <ProjectCard project={project} featured />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </MotionSection>

        <MotionSection delay={0.3}>
          <div className="mt-12 flex justify-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/[0.08] bg-surface/50 hover:bg-surface-elevated"
            >
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </MotionSection>
      </Container>
    </section>
  );
}
