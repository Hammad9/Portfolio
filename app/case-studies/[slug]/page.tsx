import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Lightbulb, AlertTriangle } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { caseStudySchema, breadcrumbSchema } from "@/lib/seo/schemas";
import { siteConfig } from "@/lib/constants";
import { caseStudies } from "@/lib/data/case-studies";

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
    title: study.title,
    description: study.summary,
    alternates: {
      canonical: `/case-studies/${study.slug}`,
    },
    openGraph: {
      title: study.title,
      description: study.summary,
      type: "article",
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
        <Container className="max-w-4xl">
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
          </div>

          <header className="mt-8">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {study.industry}
              </Badge>
              <span className="text-sm text-muted">{study.duration}</span>
            </div>

            <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              {study.title}
            </h1>
            <p className="mt-4 text-xl text-muted">{study.summary}</p>
          </header>

          <div className="mt-12 space-y-6">
            <ContentBlock title="The Business Problem" icon={AlertTriangle} color="warning">
              {study.problem}
            </ContentBlock>

            <ContentBlock title="The Solution" icon={Lightbulb} color="accent">
              {study.solution}
            </ContentBlock>

            <ContentBlock title="Business Impact" icon={CheckCircle2} color="success">
              {study.impact}
            </ContentBlock>

            <div className="rounded-2xl border border-white/[0.08] bg-surface/30 p-6 md:p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">Technologies Used</h2>
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
              <h2 className="font-heading text-2xl font-bold text-foreground">Challenges</h2>
              <ul className="mt-4 space-y-3">
                {study.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-surface/30 p-6 md:p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">Results</h2>
              <ul className="mt-4 space-y-3">
                {study.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-success" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-surface/30 p-6 md:p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">Lessons Learned</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{study.lessons}</p>
            </div>
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
  children: string;
  icon: React.ElementType;
  color: "warning" | "accent" | "success";
}) {
  const colors = {
    warning: "bg-warning/10 text-warning",
    accent: "bg-accent/10 text-accent",
    success: "bg-success/10 text-success",
  };

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-surface/30 p-6 md:p-8">
      <div className="mb-4 flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${colors[color]}`}>
          <Icon className="h-5 w-5" />
        </div>
        <h2 className="font-heading text-2xl font-bold text-foreground">{title}</h2>
      </div>
      <p className="text-lg leading-relaxed text-muted">{children}</p>
    </div>
  );
}
