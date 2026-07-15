import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GlowCard } from "@/components/shared/glow-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const primaryCategory = project.categories[0];

  return (
    <GlowCard className={cn("group flex h-full flex-col overflow-hidden p-0", featured && "lg:col-span-2")}>
      <Link href={project.caseStudyUrl} className="relative block overflow-hidden bg-surface-elevated aspect-[16/10]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary backdrop-blur-sm">
              {primaryCategory}
            </Badge>
            {project.featured && <Badge className="bg-accent/10 text-accent backdrop-blur-sm">Featured</Badge>}
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-xl font-semibold text-foreground md:text-2xl group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="mt-2 text-muted line-clamp-2">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/[0.08] bg-surface-elevated/50 px-2.5 py-1 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span className="rounded-full border border-white/[0.08] bg-surface-elevated/50 px-2.5 py-1 text-xs text-muted">
              +{project.techStack.length - 5}
            </span>
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href={project.caseStudyUrl}>
              Read Case Study
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          {project.liveUrl && project.liveUrl !== "#" && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-white/[0.08] bg-transparent hover:bg-surface-elevated"
            >
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
        </div>
      </div>
    </GlowCard>
  );
}
