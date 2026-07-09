export interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  description?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Building responsive, accessible, and performant user interfaces.",
    skills: [
      { name: "React", level: "Expert", description: "Hooks, Context, Redux Toolkit, custom hooks, performance patterns." },
      { name: "Next.js", level: "Expert", description: "App Router, Server Components, API routes, ISR, SEO." },
      { name: "JavaScript", level: "Expert", description: "ES6+, async/await, closures, prototypes, DOM APIs." },
      { name: "TypeScript", level: "Advanced", description: "Generics, utility types, strict mode, type-safe APIs." },
      { name: "Material UI", level: "Advanced", description: "Theming, custom components, design-system integration." },
      { name: "Tailwind CSS", level: "Expert", description: "Utility-first styling, custom config, responsive design, dark mode." },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    description: "Designing and consuming robust APIs and backend services.",
    skills: [
      { name: "REST API", level: "Advanced", description: "Design, integration, error handling, and authentication flows." },
      { name: "Node.js", level: "Intermediate", description: "Express servers, middleware, file handling, and API development." },
      { name: "Express", level: "Intermediate", description: "Routing, middleware, controllers, and REST conventions." },
      { name: "Authentication", level: "Advanced", description: "JWT, OAuth, session management, RBAC, and secure flows." },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    description: "Structuring, querying, and integrating data storage solutions.",
    skills: [
      { name: "SQL", level: "Advanced", description: "Relational design, joins, indexing, and complex queries." },
      { name: "MySQL", level: "Advanced", description: "Schema design, migrations, performance tuning." },
      { name: "MongoDB", level: "Intermediate", description: "Document modeling, aggregation, Mongoose." },
      { name: "NoSQL", level: "Intermediate", description: "Flexible schema design and trade-offs." },
    ],
  },
  {
    id: "automation",
    title: "Business Automation",
    description: "Automating marketing, sales, and operational workflows.",
    skills: [
      { name: "GoHighLevel", level: "Expert", description: "CRM setup, workflows, pipelines, funnels, and integrations." },
      { name: "CRM", level: "Advanced", description: "Contact management, opportunity tracking, and lifecycle automation." },
      { name: "Funnels", level: "Advanced", description: "Conversion-optimized funnel architecture and A/B testing." },
      { name: "Landing Pages", level: "Expert", description: "Lead-capture pages, sales pages, and thank-you flows." },
      { name: "Workflow Automation", level: "Expert", description: "Trigger-based automation, conditional logic, and task routing." },
      { name: "Email Automation", level: "Advanced", description: "Sequences, broadcasts, deliverability, and segmentation." },
      { name: "SMS Automation", level: "Advanced", description: "Two-way SMS, reminders, and follow-up workflows." },
      { name: "Zapier", level: "Intermediate", description: "Connecting apps and building no-code automation bridges." },
      { name: "Webhooks", level: "Advanced", description: "Real-time integrations and event-driven automation." },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    description: "The tools I use to design, build, ship, and monitor software.",
    skills: [
      { name: "Git", level: "Advanced", description: "Branching strategies, rebasing, and team collaboration." },
      { name: "GitHub", level: "Advanced", description: "Pull requests, actions, projects, and code review." },
      { name: "VS Code", level: "Expert", description: "Extensions, debugging, snippets, and productivity workflows." },
      { name: "Postman", level: "Advanced", description: "API testing, collections, and documentation." },
      { name: "Figma", level: "Intermediate", description: "Design handoff, component inspection, and prototyping." },
      { name: "Vercel", level: "Advanced", description: "Deployments, previews, analytics, and edge functions." },
    ],
  },
  {
    id: "procurement",
    title: "Digital Procurement",
    description: "Navigating Pakistan's ePADS and public-sector tender ecosystem.",
    skills: [
      { name: "ePADS", level: "Expert", description: "Vendor registration, profile management, and tender navigation." },
      { name: "Tender Management", level: "Advanced", description: "Tracking opportunities, deadlines, and submission workflows." },
      { name: "Vendor Registration", level: "Expert", description: "Document preparation, category selection, and approval follow-up." },
      { name: "Compliance Review", level: "Advanced", description: "Eligibility checks, bid security, and tender requirement analysis." },
      { name: "Proposal Documentation", level: "Advanced", description: "Technical and financial proposal writing and formatting." },
    ],
  },
];

export const techStack = skillCategories.flatMap((category) =>
  category.skills.map((skill) => ({
    ...skill,
    category: category.title,
    categoryId: category.id,
  }))
);
