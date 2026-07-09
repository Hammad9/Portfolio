import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/social";
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
  return (
    <GlowCard className={cn("group flex h-full flex-col overflow-hidden p-0", featured && "lg:col-span-2")}>
      <div className={cn("relative overflow-hidden bg-surface-elevated", featured ? "aspect-video" : "aspect-[16/10]")}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-secondary/10 text-secondary">{project.category}</Badge>
          {project.featured && <Badge className="bg-primary/10 text-primary">Featured</Badge>}
        </div>

        <h3 className="font-heading text-xl font-semibold text-foreground md:text-2xl">{project.title}</h3>
        <p className="mt-2 text-muted">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/[0.08] bg-surface-elevated/50 px-2.5 py-1 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl && (
            <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
          {project.githubUrl && (
            <Button asChild variant="outline" size="sm" className="border-white/[0.08] bg-transparent hover:bg-surface-elevated">
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
          )}
        </div>
      </div>
    </GlowCard>
  );
}
