import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "nextjs-performance-tips",
    title: "10 Next.js Performance Tips That Actually Move the Needle",
    description:
      "Practical techniques to improve Core Web Vitals, reduce bundle size, and make your Next.js application feel instant.",
    date: "2026-06-15",
    updatedAt: "2026-06-15",
    author: "Muhammad Hammad",
    tags: ["Next.js", "Performance", "React"],
    image: "/images/placeholder.svg",
    published: true,
    readingTime: "8 min read",
  },
  {
    slug: "gohighlevel-automation-guide",
    title: "The Complete GoHighLevel Automation Guide for Service Businesses",
    description:
      "How to design lead capture, nurturing, and conversion workflows that save time and increase revenue.",
    date: "2026-06-08",
    updatedAt: "2026-06-08",
    author: "Muhammad Hammad",
    tags: ["GoHighLevel", "Automation", "CRM"],
    image: "/images/placeholder.svg",
    published: true,
    readingTime: "10 min read",
  },
  {
    slug: "common-epads-registration-mistakes",
    title: "Common ePADS Registration Mistakes and How to Avoid Them",
    description:
      "A practical checklist to help Pakistani vendors register correctly and become eligible for public tenders.",
    date: "2026-05-28",
    updatedAt: "2026-05-28",
    author: "Muhammad Hammad",
    tags: ["ePADS", "Procurement", "Pakistan"],
    image: "/images/placeholder.svg",
    published: true,
    readingTime: "7 min read",
  },
  {
    slug: "tender-compliance-checklist",
    title: "The Tender Compliance Checklist Every Bidder Needs",
    description:
      "Never miss a requirement again. Use this checklist to prepare compliant, competitive tender submissions.",
    date: "2026-05-20",
    updatedAt: "2026-05-20",
    author: "Muhammad Hammad",
    tags: ["Tenders", "Compliance", "ePADS"],
    image: "/images/placeholder.svg",
    published: true,
    readingTime: "6 min read",
  },
  {
    slug: "modern-react-best-practices",
    title: "Modern React Best Practices for Scalable Applications",
    description:
      "Patterns and conventions that keep React codebases maintainable as teams and features grow.",
    date: "2026-05-12",
    updatedAt: "2026-05-12",
    author: "Muhammad Hammad",
    tags: ["React", "TypeScript", "Architecture"],
    image: "/images/placeholder.svg",
    published: true,
    readingTime: "9 min read",
  },
  {
    slug: "seo-with-nextjs",
    title: "SEO with Next.js: A Practical Guide for Developers",
    description:
      "How to structure metadata, dynamic routes, sitemaps, and structured data for search engines.",
    date: "2026-05-05",
    updatedAt: "2026-05-05",
    author: "Muhammad Hammad",
    tags: ["Next.js", "SEO", "Web Development"],
    image: "/images/placeholder.svg",
    published: true,
    readingTime: "8 min read",
  },
  {
    slug: "git-workflow",
    title: "A Git Workflow That Scales With Your Team",
    description:
      "Branching strategies, commit conventions, and review practices that reduce merge conflicts and ship faster.",
    date: "2026-04-28",
    updatedAt: "2026-04-28",
    author: "Muhammad Hammad",
    tags: ["Git", "Workflow", "Teamwork"],
    image: "/images/placeholder.svg",
    published: true,
    readingTime: "6 min read",
  },
];

export function getPublishedPosts(): BlogPost[] {
  return blogPosts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug && post.published);
}

export function getAllSlugs(): string[] {
  return blogPosts.filter((post) => post.published).map((post) => post.slug);
}
