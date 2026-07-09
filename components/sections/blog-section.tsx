import { Container } from "@/components/layout/container";
import { MotionSection, StaggerContainer, StaggerItem } from "@/components/motion";
import { SectionHeader } from "@/components/shared/section-header";
import { GradientText } from "@/components/shared/gradient-text";
import { BlogCard } from "@/components/shared/blog-card";
import { Button } from "@/components/ui/button";
import { getPublishedPosts } from "@/lib/data/blog";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function BlogSection() {
  const posts = getPublishedPosts().slice(0, 3);

  return (
    <section id="blog" className="relative overflow-hidden bg-surface/30 py-24 md:py-32">
      <Container>
        <MotionSection>
          <SectionHeader
            eyebrow="Blog"
            title={
              <>
                Insights on <GradientText>technology and business</GradientText>
              </>
            }
            description="Practical guides and lessons learned from building software, automating workflows, and navigating digital procurement."
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

        <MotionSection delay={0.3}>
          <div className="mt-12 flex justify-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/[0.08] bg-surface/50 hover:bg-surface-elevated"
            >
              <Link href="/blog">
                Read All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </MotionSection>
      </Container>
    </section>
  );
}
