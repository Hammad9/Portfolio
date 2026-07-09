import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { MotionSection, StaggerContainer, StaggerItem } from "@/components/motion";
import { SectionHeader } from "@/components/shared/section-header";
import { GradientText } from "@/components/shared/gradient-text";
import { ProjectCard } from "@/components/shared/project-card";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo/schemas";
import { siteConfig } from "@/lib/constants";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Muhammad Hammad's portfolio of web applications, CRM automation systems, and procurement tools.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Projects", url: `${siteConfig.url}/projects` },
          ]),
        ]}
      />
      <section className="relative overflow-hidden bg-background pb-24 pt-32 md:pb-32">
        <Container>
          <MotionSection>
            <SectionHeader
              eyebrow="Projects"
              title={
                <>
                  Selected <GradientText>work and experiments</GradientText>
                </>
              }
              description="A collection of projects where business requirements met clean engineering and thoughtful design."
            />
          </MotionSection>

          <MotionSection delay={0.1}>
            <StaggerContainer className="grid gap-6 md:grid-cols-2" staggerDelay={0.15}>
              {projects.map((project) => (
                <StaggerItem key={project.id}>
                  <ProjectCard project={project} featured />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </MotionSection>
        </Container>
      </section>
    </>
  );
}
