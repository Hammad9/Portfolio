import type { Project } from "@/lib/data/projects";
import type { CaseStudy } from "@/lib/data/case-studies";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedAt?: string;
  author: string;
  tags: string[];
  image: string;
  published: boolean;
  readingTime: string;
  content?: string;
}

export interface ProjectDetail extends Project {
  fullDescription?: string;
}

export interface CaseStudyDetail extends CaseStudy {
  fullContent?: string;
}

export type { Project, CaseStudy };
