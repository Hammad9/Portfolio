import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost } from "@/types";

const contentDirectory = path.join(process.cwd(), "content", "blog");

export interface PostWithContent extends BlogPost {
  content: string;
}

export function getPostBySlug(slug: string): PostWithContent | null {
  const fullPath = path.join(contentDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: data.slug || slug,
    title: data.title,
    description: data.description,
    date: data.date,
    updatedAt: data.updatedAt,
    author: data.author,
    tags: data.tags || [],
    image: data.image || "/images/placeholder.svg",
    published: data.published ?? true,
    readingTime: data.readingTime || "5 min read",
    content,
  };
}

export function getAllPosts(): PostWithContent[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const files = fs.readdirSync(contentDirectory);
  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      return getPostBySlug(slug);
    })
    .filter((post): post is PostWithContent => post !== null && post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getAllPostSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}
