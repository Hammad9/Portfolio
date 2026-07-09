export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  duration: string;
  summary: string;
  problem: string;
  solution: string;
  technologies: string[];
  challenges: string[];
  results: string[];
  impact: string;
  lessons: string;
  image: string;
  slug: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "dojo-plus",
    title: "Unifying Operations for a Growing Service Business",
    client: "DOJO+",
    industry: "Business Services",
    duration: "3 months",
    summary:
      "How I consolidated fragmented tools into a single operations platform that improved delivery speed and reduced software costs.",
    problem:
      "The business was managing projects, clients, tasks, and reporting across five different subscriptions. Data was duplicated, updates were inconsistent, and clients had no visibility into project progress.",
    solution:
      "Designed and built a centralized Next.js dashboard with role-based access, Kanban boards, automated client reports, and a notification system. Integrated the existing database and provided a migration path from the legacy stack.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Vercel"],
    challenges: [
      "Migrating data from multiple tools without disrupting daily operations.",
      "Designing a flexible permission system for admins, managers, and clients.",
      "Maintaining fast load times while rendering large project datasets.",
    ],
    results: [
      "40% reduction in monthly software costs.",
      "30% faster project delivery within the first quarter.",
      "Client satisfaction scores improved by 25%.",
    ],
    impact:
      "The platform became the single source of truth for the business, enabling leadership to make decisions based on real-time data rather than scattered spreadsheets.",
    lessons:
      "Starting with a focused core feature set and iterating based on real usage beats building everything at once. User feedback loops are essential when replacing established workflows.",
    image: "/images/placeholder.svg",
    slug: "unifying-operations-dojo-plus",
  },
  {
    id: "gohighlevel-crm",
    title: "Automating Lead Follow-Up for a Sales Team",
    client: "Service Business",
    industry: "Professional Services",
    duration: "6 weeks",
    summary:
      "How I implemented a GoHighLevel workspace that turned missed leads into booked appointments through automated follow-up.",
    problem:
      "The sales team was manually following up with leads via WhatsApp and email. Response times were inconsistent, hot leads went cold, and managers had no visibility into pipeline activity.",
    solution:
      "Configured a GoHighLevel workspace with custom pipelines, lead capture forms, automated SMS and email sequences, calendar integration, and pipeline-based task assignments.",
    technologies: ["GoHighLevel", "Zapier", "Webhooks", "JavaScript", "Google Calendar"],
    challenges: [
      "Mapping the existing sales process to GoHighLevel pipelines without forcing the team to change their language.",
      "Ensuring SMS deliverability and compliance with local regulations.",
      "Integrating third-party lead sources through webhooks.",
    ],
    results: [
      "55% increase in lead-to-appointment conversion.",
      "15+ hours saved per week on manual follow-up.",
      "Sales manager gained real-time pipeline visibility.",
    ],
    impact:
      "The business scaled its lead volume without adding sales headcount, and the team could focus on closing deals instead of chasing leads.",
    lessons:
      "Automation should mirror successful human behavior, not replace it. A well-timed automated message often outperforms a delayed manual one.",
    image: "/images/placeholder.svg",
    slug: "automating-lead-follow-up",
  },
  {
    id: "tender-management-dashboard",
    title: "Streamlining Public Procurement Compliance",
    client: "Procurement Consultancy",
    industry: "Government / Procurement",
    duration: "2 months",
    summary:
      "How I built a tender management dashboard that helped a consultancy track deadlines, organize documents, and improve submission success rates.",
    problem:
      "The consultancy was tracking tenders across spreadsheets and email threads. Deadlines were missed, compliance documents were scattered, and team members wasted hours searching for files.",
    solution:
      "Built a React dashboard with tender tracking boards, document upload workflows, deadline reminders, and a compliance checklist system.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    challenges: [
      "Designing a data model flexible enough for varying tender requirements.",
      "Creating reminder logic that accounts for working days and submission cutoffs.",
      "Building an intuitive UI for non-technical procurement staff.",
    ],
    results: [
      "On-time submission rate improved from 60% to 95%.",
      "Document search time reduced by 70%.",
      "Team capacity increased by 2x without adding headcount.",
    ],
    impact:
      "The consultancy transformed from a reactive, spreadsheet-driven operation into a proactive procurement team capable of managing more tenders with fewer errors.",
    lessons:
      "Procurement software must be simpler than the process it supports. If the tool adds friction, people will return to spreadsheets.",
    image: "/images/placeholder.svg",
    slug: "streamlining-procurement-compliance",
  },
];
