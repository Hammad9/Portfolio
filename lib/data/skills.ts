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
    id: "mobile",
    title: "Mobile Development",
    description: "Building cross-platform mobile applications with visual development and Firebase backends.",
    skills: [
      { name: "FlutterFlow", level: "Advanced", description: "Visual app development, Firebase integration, responsive screens, API connections." },
      { name: "Firebase", level: "Advanced", description: "Authentication, Firestore, Cloud Functions, real-time data." },
      { name: "Responsive Mobile Design", level: "Expert", description: "Mobile-first layouts, touch interactions, cross-device testing." },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    description: "Designing and consuming robust APIs and backend services.",
    skills: [
      { name: "REST API", level: "Advanced", description: "Design, integration, error handling, and authentication flows." },
      { name: "GraphQL", level: "Advanced", description: "Queries, mutations, subscriptions, and AppSync integration." },
      { name: "Node.js", level: "Intermediate", description: "Express servers, middleware, file handling, and API development." },
      { name: "Django", level: "Intermediate", description: "Models, views, serializers, and REST conventions." },
      { name: "Authentication", level: "Advanced", description: "JWT, OAuth, session management, RBAC, and secure flows." },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description: "Deploying, hosting, and integrating cloud-native services.",
    skills: [
      { name: "AWS Amplify", level: "Advanced", description: "Auth, API, hosting, and storage for full-stack apps." },
      { name: "AWS AppSync", level: "Advanced", description: "GraphQL APIs with real-time subscriptions and Cognito auth." },
      { name: "AWS Cognito", level: "Advanced", description: "User pools, federated sign-in, and secure access control." },
      { name: "Vercel", level: "Advanced", description: "Deployments, previews, analytics, and edge functions." },
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
