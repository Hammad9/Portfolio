import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { GlowCard } from "@/components/shared/glow-card";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <GlowCard className="group flex h-full flex-col overflow-hidden p-0">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {post.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-accent/10 text-accent">
              {tag}
            </Badge>
          ))}
          <span className="ml-auto flex items-center text-xs text-muted">
            <Calendar className="mr-1 h-3 w-3" />
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>

        <h3 className="font-heading text-xl font-semibold text-foreground">{post.title}</h3>
        <p className="mt-2 flex-1 text-muted">{post.description}</p>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          Read article
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </GlowCard>
  );
}
