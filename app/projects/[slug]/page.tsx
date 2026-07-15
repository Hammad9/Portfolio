import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ExternalLink, Lightbulb, AlertTriangle, Target, Layers, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { projectSchema, breadcrumbSchema } from "@/lib/seo/schemas";
import { siteConfig } from "@/lib/constants";
import { projects } from "@/lib/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Project`,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.id}`,
    },
    openGraph: {
      title: `${project.title} — Muhammad Hammad`,
      description: project.description,
      type: "website",
      url: `/projects/${project.id}`,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 800,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Muhammad Hammad`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((p) => p.id !== project.id && p.categories.some((c) => project.categories.includes(c)))
    .slice(0, 2);

  return (
    <>
      <JsonLd
        data={[
          projectSchema({
            title: project.title,
            description: project.description,
            slug: project.id,
            image: project.image,
            techStack: project.techStack,
          }),
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Projects", url: `${siteConfig.url}/projects` },
            { name: project.title, url: `${siteConfig.url}/projects/${project.id}` },
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
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all projects
            </Link>
          </Button>

          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/[0.08]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>

          <header className="mt-8">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              {project.categories.map((category) => (
                <Badge key={category} variant="secondary" className="bg-primary/10 text-primary">
                  {category}
                </Badge>
              ))}
              {project.featured && <Badge className="bg-accent/10 text-accent">Featured</Badge>}
            </div>

            <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-xl text-muted">{project.tagline}</p>
          </header>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/[0.08] bg-surface-elevated/50 px-3 py-1.5 text-sm text-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <InfoCard label="Client" value={project.client} />
            <InfoCard label="Industry" value={project.industry} />
            <InfoCard label="My Role" value={project.role} />
            {project.duration && <InfoCard label="Duration" value={project.duration} />}
          </div>

          <div className="mt-12 space-y-8">
            <ContentBlock title="Project Overview" icon={Target} color="primary">
              {project.description}
            </ContentBlock>

            <div className="grid gap-6 md:grid-cols-3">
              <ContentBlock title="Problem" icon={AlertTriangle} color="warning">
                {project.problem}
              </ContentBlock>
              <ContentBlock title="Solution" icon={Lightbulb} color="accent">
                {project.solution}
              </ContentBlock>
              <ContentBlock title="Business Impact" icon={CheckCircle2} color="success">
                {project.result}
              </ContentBlock>
            </div>

            <ContentBlock title="My Role & Responsibilities" icon={Layers} color="secondary">
              <ul className="mt-4 space-y-3">
                {project.responsibilities.map((responsibility, index) => (
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
                {project.features.map((feature, index) => (
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
                {project.techStack.map((tech) => (
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
              <h2 className="font-heading text-2xl font-bold text-foreground">Gallery</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {project.gallery.map((image, index) => (
                  <div key={index} className="relative aspect-video overflow-hidden rounded-xl border border-white/[0.08]">
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {relatedProjects.length > 0 && (
              <div className="rounded-2xl border border-white/[0.08] bg-surface/30 p-6 md:p-8">
                <h2 className="font-heading text-2xl font-bold text-foreground">Related Projects</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {relatedProjects.map((related) => (
                    <Link
                      key={related.id}
                      href={`/projects/${related.id}`}
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
                      <p className="mt-1 text-sm text-muted line-clamp-2">{related.tagline}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            {project.liveUrl && project.liveUrl !== "#" && (
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Project
                </Link>
              </Button>
            )}
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/[0.08] bg-transparent hover:bg-surface-elevated"
            >
              <Link href={`/case-studies/${project.id}`}>
                Read Full Case Study
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
