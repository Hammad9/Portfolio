import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/social";
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
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.id}`,
    },
    openGraph: {
      title: project.title,
      description: project.description,
      type: "website",
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
        <Container className="max-w-4xl">
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
          </div>

          <header className="mt-8">
            <div className="mb-4 flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-secondary/10 text-secondary">
                {project.category}
              </Badge>
              {project.featured && <Badge className="bg-primary/10 text-primary">Featured</Badge>}
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

          <div className="mt-12 space-y-8">
            <div className="rounded-2xl border border-white/[0.08] bg-surface/30 p-6 md:p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">About this project</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{project.description}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-white/[0.08] bg-surface/30 p-6">
                <h3 className="font-heading text-lg font-semibold text-primary">Problem</h3>
                <p className="mt-2 text-muted">{project.problem}</p>
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-surface/30 p-6">
                <h3 className="font-heading text-lg font-semibold text-accent">Solution</h3>
                <p className="mt-2 text-muted">{project.solution}</p>
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-surface/30 p-6">
                <h3 className="font-heading text-lg font-semibold text-success">Result</h3>
                <p className="mt-2 text-muted">{project.result}</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            {project.liveUrl && (
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Demo
                </Link>
              </Button>
            )}
            {project.githubUrl && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/[0.08] bg-transparent hover:bg-surface-elevated"
              >
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="mr-2 h-4 w-4" />
                  View on GitHub
                </Link>
              </Button>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
