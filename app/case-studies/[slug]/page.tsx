import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Lightbulb, AlertTriangle, Target, Layers, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { caseStudySchema, breadcrumbSchema } from "@/lib/seo/schemas";
import { siteConfig } from "@/lib/constants";
import { caseStudies } from "@/lib/data/case-studies";
import { projects } from "@/lib/data/projects";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${study.title} — Case Study`,
    description: study.summary,
    alternates: {
      canonical: `/case-studies/${study.slug}`,
    },
    openGraph: {
      title: `${study.title} — Muhammad Hammad`,
      description: study.summary,
      type: "article",
      url: `/case-studies/${study.slug}`,
      images: [
        {
          url: study.image,
          width: 1200,
          height: 800,
          alt: study.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} — Muhammad Hammad`,
      description: study.summary,
      images: [study.image],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  const relatedStudies = caseStudies
    .filter((s) => s.slug !== study.slug && (s.industry === study.industry || s.client === study.client))
    .slice(0, 2);

  const relatedProject = projects.find((p) => p.id === study.id);

  return (
    <>
      <JsonLd
        data={[
          caseStudySchema({
            title: study.title,
            description: study.summary,
            slug: study.slug,
            image: study.image,
            technologies: study.technologies,
          }),
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Case Studies", url: `${siteConfig.url}/case-studies` },
            { name: study.title, url: `${siteConfig.url}/case-studies/${study.slug}` },
          ]),
        ]}
      />

      <section className="relative overflow-hidden bg-background pb-24 pt-32 md:pb-32">
        <Container className="max-w-5xl">
          <Button
            asChild
            variant="ghost"
            className="mb-8 -ml-4 text-muted hover:text-foreground"
          >
            <Link href="/case-studies">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all case studies
            </Link>
          </Button>

          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/[0.08]">
            <Image
              src={study.image}
              alt={study.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>

          <header className="mt-8">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {study.industry}
              </Badge>
              {study.duration && <span className="text-sm text-muted">{study.duration}</span>}
            </div>

            <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              {study.title}
            </h1>
            <p className="mt-4 text-xl text-muted">{study.summary}</p>
          </header>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <InfoCard label="Client" value={study.client} />
            <InfoCard label="Industry" value={study.industry} />
            <InfoCard label="My Role" value={study.role} />
            {study.duration && <InfoCard label="Duration" value={study.duration} />}
          </div>

          <div className="mt-12 space-y-8">
            <ContentBlock title="Overview" icon={Target} color="primary">
              {study.overview}
            </ContentBlock>

            <div className="grid gap-6 md:grid-cols-2">
              <ContentBlock title="The Business Problem" icon={AlertTriangle} color="warning">
                {study.problem}
              </ContentBlock>
              <ContentBlock title="The Solution" icon={Lightbulb} color="accent">
                {study.solution}
              </ContentBlock>
            </div>

            <ContentBlock title="My Role & Responsibilities" icon={Layers} color="secondary">
              <ul className="mt-4 space-y-3">
                {study.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                    {responsibility}
                  </li>
                ))}
              </ul>
            </ContentBlock>

            <div className="rounded-2xl border border-white/[0.08] bg-surface/30 p-6 md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground">Key Features</h2>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {study.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-success" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-surface/30 p-6 md:p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">Technology Stack</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {study.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/[0.08] bg-surface-elevated/50 px-3 py-1.5 text-sm text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-surface/30 p-6 md:p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">Challenges & How They Were Solved</h2>
              <ul className="mt-4 space-y-3">
                {study.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            <ContentBlock title="Business Impact" icon={CheckCircle2} color="success">
              {study.impact}
            </ContentBlock>

            <ContentBlock title="Lessons Learned" icon={Lightbulb} color="accent">
              {study.lessons}
            </ContentBlock>

            <div className="rounded-2xl border border-white/[0.08] bg-surface/30 p-6 md:p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">Gallery</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {study.gallery.map((image, index) => (
                  <div key={index} className="relative aspect-video overflow-hidden rounded-xl border border-white/[0.08]">
                    <Image
                      src={image}
                      alt={`${study.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {relatedStudies.length > 0 && (
              <div className="rounded-2xl border border-white/[0.08] bg-surface/30 p-6 md:p-8">
                <h2 className="font-heading text-2xl font-bold text-foreground">Related Case Studies</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {relatedStudies.map((related) => (
                    <Link
                      key={related.id}
                      href={`/case-studies/${related.slug}`}
                      className="group rounded-xl border border-white/[0.08] bg-surface/50 p-4 transition-all hover:border-white/[0.15] hover:bg-surface-elevated/50"
                    >
                      <div className="relative aspect-video overflow-hidden rounded-lg">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <h3 className="mt-3 font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {related.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted line-clamp-2">{related.summary}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            {relatedProject && (
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href={`/projects/${relatedProject.id}`}>
                  View Project Details
                </Link>
              </Button>
            )}
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/[0.08] bg-transparent hover:bg-surface-elevated"
            >
              <Link href="/case-studies">
                Browse More Case Studies
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContentBlock({
  title,
  children,
  icon: Icon,
  color,
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ElementType;
  color: "primary" | "accent" | "success" | "warning" | "secondary";
}) {
  const colors = {
    primary: "bg-primary/10 text-primary",
    accent: "bg-accent/10 text-accent",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
    secondary: "bg-secondary/10 text-secondary",
  };

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-surface/30 p-6 md:p-8">
      <div className="mb-4 flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${colors[color]}`}>
          <Icon className="h-5 w-5" />
        </div>
        <h2 className="font-heading text-2xl font-bold text-foreground">{title}</h2>
      </div>
      <div className="text-lg leading-relaxed text-muted">{children}</div>
    </div>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-surface/30 p-5">
      <p className="text-sm font-medium text-muted">{label}</p>
      <p className="mt-1 font-heading text-lg font-semibold text-foreground">{value}</p>
    </div>
  );
}
