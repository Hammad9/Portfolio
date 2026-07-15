export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  type: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "senior-software-engineer",
    role: "Software Engineer",
    company: "Freelance / Contract",
    location: "Pakistan / Remote",
    type: "Full-time",
    startDate: "2021",
    endDate: "Present",
    description:
      "Designing and building scalable web applications, mobile apps, and business automation systems for international clients, agencies, and startups. Leading frontend architecture, API integrations, and deployment workflows.",
    achievements: [
      "Delivered production-grade Next.js applications including Dojo+, Spark Host, PiVDC, and Dojo+ School.",
      "Built FlutterFlow mobile solutions for health technology clients including INHerit and RareCan.",
      "Reduced scattered tool usage for clients by unifying workflows into single dashboards and portals.",
      "Introduced component libraries and design systems that cut development time and improved maintainability.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Material UI",
      "Tailwind CSS",
      "FlutterFlow",
      "Firebase",
      "AWS",
      "GraphQL",
    ],
  },
  {
    id: "nextjs-developer",
    role: "Next.js & React Developer",
    company: "TkTurners / Remote Contract",
    location: "Remote",
    type: "Contract",
    startDate: "2022",
    endDate: "Present",
    description:
      "Developed full-stack Next.js applications for clients in sports, fitness, hospitality, property marketing, and BIM/VDC software. Built responsive interfaces, integrated third-party APIs, and implemented admin tooling.",
    achievements: [
      "Shipped Dojo+ social platform, Dojo+ School directory, and Dojo+ Sites website builder.",
      "Built Spark Host marketing dashboard with social publishing, email campaigns, and Lodgify integration.",
      "Developed PiVDC product portal with AWS Amplify, AppSync, Cognito, and AI-powered search.",
      "Implemented role-based access, admin consoles, and scalable data models across multiple projects.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Material UI",
      "TanStack Query",
      "Redux Toolkit",
      "Strapi",
      "AWS Amplify",
      "GraphQL",
    ],
  },
  {
    id: "flutterflow-developer",
    role: "FlutterFlow & Mobile Developer",
    company: "Health Technology Clients",
    location: "Remote",
    type: "Contract",
    startDate: "2023",
    endDate: "Present",
    description:
      "Contributed to FlutterFlow mobile applications for health technology products, integrating Firebase, Django, and Azure SQL backends to support family health history, research participation, and rare cancer analysis workflows.",
    achievements: [
      "Contributed to INHerit family health history mobile app with FlutterFlow, Firebase, Django, and Azure SQL.",
      "Supported RareCan rare cancer analysis platform with structured data workflows and decision-support interfaces.",
      "Built responsive mobile screens and connected frontend flows to backend services and external APIs.",
      "Helped establish admin screens and repeatable research workflows for clinical users.",
    ],
    technologies: [
      "FlutterFlow",
      "Firebase",
      "Django",
      "Azure SQL",
      "REST APIs",
      "Responsive Design",
    ],
  },
  {
    id: "automation-consultant",
    role: "GoHighLevel Automation Specialist",
    company: "Independent Consultant",
    location: "Pakistan",
    type: "Freelance",
    startDate: "2022",
    endDate: "Present",
    description:
      "Helping businesses automate CRM, sales, and marketing workflows using GoHighLevel. Designing funnels, pipelines, email/SMS sequences, and integrations.",
    achievements: [
      "Configured GoHighLevel workspaces for service businesses across multiple industries.",
      "Automated lead nurturing workflows that increased conversion rates.",
      "Integrated GoHighLevel with third-party tools via Zapier and webhooks.",
    ],
    technologies: ["GoHighLevel", "Zapier", "Webhooks", "JavaScript", "CRM"],
  },
  {
    id: "epads-consultant",
    role: "Digital Procurement & ePADS Consultant",
    company: "Independent Consultant",
    location: "Pakistan",
    type: "Freelance",
    startDate: "2022",
    endDate: "Present",
    description:
      "Supporting organizations with vendor registration, tender documentation, bid compliance, and digital procurement strategy on Pakistan's ePADS platform.",
    achievements: [
      "Assisted organizations with ePADS vendor registration and profile setup.",
      "Prepared tender documentation packages for public and private sector bids.",
      "Improved client bid compliance and submission success rates.",
    ],
    technologies: ["ePADS", "Tender Management", "Compliance Review", "Documentation"],
  },
];
