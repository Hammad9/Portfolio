import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { MotionSection } from "@/components/motion";
import { SectionHeader } from "@/components/shared/section-header";
import { GradientText } from "@/components/shared/gradient-text";
import { ProjectsList } from "@/components/shared/projects-list";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo/schemas";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Muhammad Hammad's portfolio of Next.js web applications, FlutterFlow mobile apps, and business automation systems.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects — Muhammad Hammad",
    description:
      "Explore Muhammad Hammad's portfolio of Next.js web applications, FlutterFlow mobile apps, and business automation systems.",
    type: "website",
    url: "/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — Muhammad Hammad",
    description:
      "Explore Muhammad Hammad's portfolio of Next.js web applications, FlutterFlow mobile apps, and business automation systems.",
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
              description="A collection of projects where business requirements met clean engineering, thoughtful design, and measurable outcomes."
            />
          </MotionSection>

          <MotionSection delay={0.1}>
            <ProjectsList />
          </MotionSection>
        </Container>
      </section>
    </>
  );
}
