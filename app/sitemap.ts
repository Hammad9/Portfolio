import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";
import { getAllPostSlugs } from "@/lib/mdx";
import { projects } from "@/lib/data/projects";
import { caseStudies } from "@/lib/data/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/skills",
    "/projects",
    "/case-studies",
    "/experience",
    "/testimonials",
    "/blog",
    "/contact",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const blogRoutes = getAllPostSlugs().map((slug) => ({
    url: `${siteConfig.url}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${siteConfig.url}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...projectRoutes, ...caseStudyRoutes];
}
