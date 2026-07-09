export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: string;
}

export const projects: Project[] = [
  {
    id: "dojo-plus",
    title: "DOJO+",
    tagline: "All-in-one business operations platform for modern teams.",
    description:
      "A comprehensive operations dashboard that consolidates project management, team collaboration, and client communication into a single interface.",
    problem:
      "The client was juggling five disconnected tools, causing duplicated work, missed deadlines, and poor client visibility.",
    solution:
      "Built a unified Next.js dashboard with real-time updates, role-based access, integrated task boards, and automated client reporting.",
    result:
      "Reduced tool subscription costs by 40% and improved project delivery speed by 30% within the first quarter.",
    image: "/images/placeholder.svg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "SaaS Platform",
  },
  {
    id: "gohighlevel-crm",
    title: "GoHighLevel CRM",
    tagline: "Custom CRM and automation workspace for a service business.",
    description:
      "A fully configured GoHighLevel workspace with custom pipelines, automated follow-ups, and integrated appointment scheduling.",
    problem:
      "Leads were falling through the cracks because follow-up was manual and the sales team had no unified view of prospects.",
    solution:
      "Designed and deployed a GoHighLevel environment with lead capture forms, automated SMS/email nurture sequences, and pipeline-driven task automation.",
    result:
      "Increased lead-to-appointment conversion by 55% and saved the sales team 15+ hours per week.",
    image: "/images/placeholder.svg",
    techStack: ["GoHighLevel", "Zapier", "Webhooks", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "CRM Automation",
  },
  {
    id: "tender-management-dashboard",
    title: "Tender Management Dashboard",
    tagline: "Track opportunities, deadlines, and compliance in one place.",
    description:
      "A procurement dashboard that helps businesses monitor active tenders, manage documentation, and never miss a submission deadline.",
    problem:
      "Procurement teams were missing tender deadlines and struggling to organize compliance documents across spreadsheets and emails.",
    solution:
      "Built a React dashboard with deadline tracking, document upload workflows, status boards, and automated reminders.",
    result:
      "Improved on-time submission rate from 60% to 95% and cut document search time by 70%.",
    image: "/images/placeholder.svg",
    techStack: ["React", "TypeScript", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Business Tool",
  },
  {
    id: "business-crm",
    title: "Business CRM",
    tagline: "Lightweight CRM tailored for small business sales workflows.",
    description:
      "A custom CRM solution for managing contacts, deals, tasks, and sales pipelines without the bloat of enterprise platforms.",
    problem:
      "A growing business needed a CRM that matched their exact sales process without expensive per-user licensing.",
    solution:
      "Developed a Next.js CRM with custom deal stages, activity tracking, contact management, and sales reporting.",
    result:
      "Enabled the team to manage 3x more deals with the same headcount and eliminated recurring SaaS CRM fees.",
    image: "/images/placeholder.svg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "CRM",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    tagline: "Premium developer portfolio with animations and SEO optimization.",
    description:
      "The very portfolio you are viewing now — built to demonstrate modern frontend architecture, motion design, and technical SEO.",
    problem:
      "A generic portfolio fails to communicate business value and doesn't stand out to recruiters or clients.",
    solution:
      "Created a custom Next.js 15 portfolio with Framer Motion animations, structured data, dynamic OG images, and performance optimization.",
    result:
      "A differentiated personal brand asset that communicates expertise across software engineering, automation, and procurement.",
    image: "/images/placeholder.svg",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Personal Website",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
