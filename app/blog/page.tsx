import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { MotionSection, StaggerContainer, StaggerItem } from "@/components/motion";
import { SectionHeader } from "@/components/shared/section-header";
import { GradientText } from "@/components/shared/gradient-text";
import { BlogCard } from "@/components/shared/blog-card";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo/schemas";
import { siteConfig } from "@/lib/constants";
import { getPublishedPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guides and insights on Next.js, React, GoHighLevel automation, ePADS, and digital procurement by Muhammad Hammad.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Blog", url: `${siteConfig.url}/blog` },
          ]),
        ]}
      />
      <section className="relative overflow-hidden bg-background pb-24 pt-32 md:pb-32">
        <Container>
          <MotionSection>
            <SectionHeader
              eyebrow="Blog"
              title={
                <>
                  Articles on <GradientText>code, automation, and procurement</GradientText>
                </>
              }
              description="Practical guides for developers, business owners, and procurement teams."
            />
          </MotionSection>

          <MotionSection delay={0.1}>
            <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
              {posts.map((post) => (
                <StaggerItem key={post.slug}>
                  <BlogCard post={post} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </MotionSection>
        </Container>
      </section>
    </>
  );
}
