import {
  Code2,
  Palette,
  Zap,
  LineChart,
  Link2,
  Settings,
  Workflow,
  Funnel,
  Mail,
  MessageSquare,
  Building2,
  FileCheck,
  ClipboardList,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  value: string;
  icon: LucideIcon;
  category: "development" | "automation" | "procurement";
}

export const services: Service[] = [
  {
    id: "modern-web-development",
    title: "Modern Web Development",
    description:
      "Custom web applications built with React, Next.js, and TypeScript. Clean architecture, scalable components, and performance-first engineering.",
    value: "Turn your business requirements into fast, reliable web products that users actually enjoy.",
    icon: Code2,
    category: "development",
  },
  {
    id: "nextjs-development",
    title: "Next.js Development",
    description:
      "Server-side rendering, static generation, API routes, and app-router architecture for enterprise-grade Next.js applications.",
    value: "Get the SEO, speed, and scalability benefits of modern Next.js without the complexity overhead.",
    icon: Zap,
    category: "development",
  },
  {
    id: "react-development",
    title: "React Development",
    description:
      "Component-driven interfaces with hooks, context, state management, and reusable design systems.",
    value: "Build maintainable frontend products with clean, testable React code.",
    icon: Palette,
    category: "development",
  },
  {
    id: "landing-pages",
    title: "High-Converting Landing Pages",
    description:
      "Conversion-focused landing pages designed to capture leads, explain value, and drive action.",
    value: "Increase signups and inquiries with landing pages optimized for clarity and persuasion.",
    icon: Funnel,
    category: "development",
  },
  {
    id: "performance-optimization",
    title: "Performance Optimization",
    description:
      "Core Web Vitals tuning, image optimization, code splitting, and lazy loading for maximum speed.",
    value: "Reduce bounce rates and improve search rankings with sub-second page loads.",
    icon: LineChart,
    category: "development",
  },
  {
    id: "api-integration",
    title: "API Integration",
    description:
      "Connect frontend applications with REST APIs, third-party services, payment gateways, and databases.",
    value: "Seamlessly integrate your product with the tools and data sources your business depends on.",
    icon: Link2,
    category: "development",
  },
  {
    id: "gohighlevel-crm",
    title: "GoHighLevel CRM Setup",
    description:
      "Complete GoHighLevel workspace configuration, pipelines, calendars, contacts, and opportunity management.",
    value: "Centralize your sales process and never lose track of a lead again.",
    icon: Settings,
    category: "automation",
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    description:
      "Automated lead nurturing, follow-ups, task assignments, and internal notifications inside GoHighLevel.",
    value: "Save hours every week by automating repetitive sales and support tasks.",
    icon: Workflow,
    category: "automation",
  },
  {
    id: "sales-funnels",
    title: "Sales Funnels",
    description:
      "End-to-end funnel design from ad click to booked call, including landing pages, forms, and follow-ups.",
    value: "Convert more prospects into paying customers with structured, automated funnels.",
    icon: Funnel,
    category: "automation",
  },
  {
    id: "email-automation",
    title: "Email Automation",
    description:
      "Drip campaigns, welcome sequences, abandoned lead recovery, and personalized outreach workflows.",
    value: "Stay top-of-mind with prospects through timely, relevant automated emails.",
    icon: Mail,
    category: "automation",
  },
  {
    id: "sms-automation",
    title: "SMS Automation",
    description:
      "Two-way SMS workflows, appointment reminders, and instant lead response systems.",
    value: "Reach customers where they respond fastest with automated SMS touchpoints.",
    icon: MessageSquare,
    category: "automation",
  },
  {
    id: "epads-registration",
    title: "ePADS Vendor Registration",
    description:
      "Step-by-step support for registering vendors on Pakistan's ePADS procurement platform.",
    value: "Become eligible to bid on government and public-sector tenders.",
    icon: Building2,
    category: "procurement",
  },
  {
    id: "tender-documentation",
    title: "Tender Documentation",
    description:
      "Preparation of bid documents, technical proposals, financial statements, and compliance paperwork.",
    value: "Submit complete, professional tender documents that meet evaluation criteria.",
    icon: ClipboardList,
    category: "procurement",
  },
  {
    id: "bid-compliance",
    title: "Bid Compliance Review",
    description:
      "Review tender requirements, eligibility criteria, and bid security instructions before submission.",
    value: "Avoid disqualification due to missing documents or non-compliant submissions.",
    icon: FileCheck,
    category: "procurement",
  },
  {
    id: "procurement-consultation",
    title: "Digital Procurement Consultation",
    description:
      "Strategic guidance on ePADS navigation, tender tracking, vendor categories, and procurement best practices.",
    value: "Make informed decisions and compete confidently in Pakistan's digital procurement market.",
    icon: ShieldCheck,
    category: "procurement",
  },
];

export const serviceCategories = [
  { id: "development", label: "Web Development" },
  { id: "automation", label: "GoHighLevel Automation" },
  { id: "procurement", label: "ePADS Consultancy" },
];
