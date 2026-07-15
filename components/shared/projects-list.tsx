"use client";

import { useState, useMemo } from "react";
import { StaggerContainer, StaggerItem } from "@/components/motion";
import { ProjectCard } from "@/components/shared/project-card";
import { projects, projectCategories } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

export function ProjectsList() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <>
      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {projectCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
              activeCategory === category
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : "border border-white/[0.08] bg-surface/50 text-muted hover:text-foreground hover:border-white/[0.15]"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <StaggerContainer
        key={activeCategory}
        className="grid gap-6 md:grid-cols-2"
        staggerDelay={0.15}
      >
        {filteredProjects.map((project) => (
          <StaggerItem key={project.id}>
            <ProjectCard project={project} featured />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </>
  );
}
