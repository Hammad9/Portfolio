import { siteConfig } from "@/lib/constants";
import { personalInfo } from "@/lib/data/site";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  url: siteConfig.url,
  image: `${siteConfig.url}${personalInfo.profileImage}`,
  jobTitle: personalInfo.title,
  description: personalInfo.shortBio,
  address: {
    "@type": "PostalAddress",
    addressCountry: personalInfo.location,
  },
  sameAs: [
    personalInfo.linkedin,
    personalInfo.github,
    personalInfo.twitter,
  ].filter(Boolean),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  author: {
    "@type": "Person",
    name: personalInfo.name,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}

export function articleSchema({
  title,
  description,
  slug,
  date,
  updatedAt,
  author,
  image,
  tags,
}: {
  title: string;
  description: string;
  slug: string;
  date: string;
  updatedAt?: string;
  author: string;
  image: string;
  tags: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image.startsWith("http") ? image : `${siteConfig.url}${image}`,
    datePublished: date,
    dateModified: updatedAt || date,
    author: {
      "@type": "Person",
      name: author,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: personalInfo.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${slug}`,
    },
    keywords: tags.join(", "),
  };
}

export function projectSchema({
  title,
  description,
  slug,
  image,
  techStack,
}: {
  title: string;
  description: string;
  slug: string;
  image: string;
  techStack: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: title,
    description,
    image: image.startsWith("http") ? image : `${siteConfig.url}${image}`,
    url: `${siteConfig.url}/projects/${slug}`,
    applicationCategory: "WebApplication",
    operatingSystem: "Any",
    author: {
      "@type": "Person",
      name: personalInfo.name,
      url: siteConfig.url,
    },
    programmingLanguage: techStack,
  };
}

export function caseStudySchema({
  title,
  description,
  slug,
  image,
  technologies,
}: {
  title: string;
  description: string;
  slug: string;
  image: string;
  technologies: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description,
    image: image.startsWith("http") ? image : `${siteConfig.url}${image}`,
    url: `${siteConfig.url}/case-studies/${slug}`,
    author: {
      "@type": "Person",
      name: personalInfo.name,
      url: siteConfig.url,
    },
    keywords: technologies.join(", "),
  };
}
