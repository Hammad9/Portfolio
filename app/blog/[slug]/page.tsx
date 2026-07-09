import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { articleSchema, breadcrumbSchema } from "@/lib/seo/schemas";
import { siteConfig } from "@/lib/constants";
import { getPostBySlug, getAllPostSlugs } from "@/lib/mdx";
import { MDXComponents } from "@/components/mdx/mdx-components";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
      images: [post.image],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: post.title,
            description: post.description,
            slug: post.slug,
            date: post.date,
            updatedAt: post.updatedAt,
            author: post.author,
            image: post.image,
            tags: post.tags,
          }),
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Blog", url: `${siteConfig.url}/blog` },
            { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
          ]),
        ]}
      />

      <article className="relative overflow-hidden bg-background pb-24 pt-32 md:pb-32">
        <Container className="max-w-4xl">
          <Button
            asChild
            variant="ghost"
            className="mb-8 -ml-4 text-muted hover:text-foreground"
          >
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all articles
            </Link>
          </Button>

          <header className="mb-12">
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              {post.title}
            </h1>

            <p className="mt-4 text-xl text-muted">{post.description}</p>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readingTime}
              </div>
            </div>
          </header>

          <div className="prose prose-invert prose-lg max-w-none">
            <MDXRemote source={post.content} components={MDXComponents()} />
          </div>
        </Container>
      </article>
    </>
  );
}
