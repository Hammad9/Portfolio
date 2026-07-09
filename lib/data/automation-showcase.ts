import {
  Users,
  GitBranch,
  Mail,
  MessageSquare,
  FileText,
  Funnel,
  Plug,
  type LucideIcon,
} from "lucide-react";

export interface AutomationFeature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  steps: string[];
}

export const automationFeatures: AutomationFeature[] = [
  {
    id: "crm",
    title: "CRM & Contact Management",
    description:
      "Centralize every lead and customer interaction with custom fields, tags, pipelines, and lifecycle stages.",
    icon: Users,
    steps: [
      "Capture leads from forms, landing pages, and ads.",
      "Tag and segment contacts automatically.",
      "Track every touchpoint in a unified timeline.",
    ],
  },
  {
    id: "pipelines",
    title: "Sales Pipelines",
    description:
      "Visualize deal flow with custom pipelines, automated stage updates, and team task assignments.",
    icon: GitBranch,
    steps: [
      "Define stages that match your sales process.",
      "Move deals automatically based on actions.",
      "Notify owners when deals need attention.",
    ],
  },
  {
    id: "email-automation",
    title: "Email Automation",
    description:
      "Send the right message at the right time with behavior-triggered email sequences and broadcasts.",
    icon: Mail,
    steps: [
      "Build welcome and nurture sequences.",
      "Trigger emails based on tags and events.",
      "Track opens, clicks, and replies.",
    ],
  },
  {
    id: "sms-automation",
    title: "SMS Automation",
    description:
      "Engage leads instantly with two-way SMS, appointment reminders, and follow-up workflows.",
    icon: MessageSquare,
    steps: [
      "Send instant responses to new inquiries.",
      "Remind prospects of upcoming calls.",
      "Re-engage cold leads with targeted SMS.",
    ],
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    description:
      "Create high-converting pages with forms, calendars, and payment collection — no extra tools needed.",
    icon: FileText,
    steps: [
      "Design mobile-responsive pages quickly.",
      "Connect forms directly to pipelines.",
      "A/B test headlines and calls to action.",
    ],
  },
  {
    id: "funnels",
    title: "Sales Funnels",
    description:
      "Build end-to-end funnels that capture, nurture, and convert prospects on autopilot.",
    icon: Funnel,
    steps: [
      "Map the full customer journey.",
      "Automate transitions between funnel stages.",
      "Measure conversion at every step.",
    ],
  },
  {
    id: "integrations",
    title: "Integrations",
    description:
      "Connect GoHighLevel with your existing tools through Zapier, webhooks, and native integrations.",
    icon: Plug,
    steps: [
      "Sync data with calendars and email tools.",
      "Trigger workflows from external systems.",
      "Keep every platform updated automatically.",
    ],
  },
];
