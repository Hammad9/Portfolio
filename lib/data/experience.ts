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
    id: "software-engineer",
    role: "Software Engineer",
    company: "Freelance / Contract",
    location: "Pakistan / Remote",
    type: "Full-time",
    startDate: "2022",
    endDate: "Present",
    description:
      "Designing and building scalable web applications for international clients, agencies, and startups. Leading frontend architecture, API integrations, and deployment workflows.",
    achievements: [
      "Delivered 30+ production web applications and dashboards.",
      "Reduced page load times by an average of 45% through performance optimization.",
      "Introduced component libraries and design systems that cut development time by 30%.",
      "Mentored junior developers on React, TypeScript, and clean-code practices.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
  },
  {
    id: "frontend-developer",
    role: "Frontend Developer",
    company: "Agency / Product Team",
    location: "Remote",
    type: "Contract",
    startDate: "2021",
    endDate: "2022",
    description:
      "Developed responsive user interfaces, integrated REST APIs, and collaborated with designers to ship pixel-perfect experiences for multiple client projects.",
    achievements: [
      "Built 15+ client websites and web applications from Figma designs.",
      "Implemented reusable component patterns that reduced code duplication.",
      "Improved mobile UX scores across client projects.",
    ],
    technologies: ["React", "JavaScript", "Material UI", "REST API", "Git"],
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
      "Configured GoHighLevel workspaces for 10+ service businesses.",
      "Automated lead nurturing workflows that increased conversion rates by up to 55%.",
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
      "Assisted 15+ organizations with ePADS vendor registration and profile setup.",
      "Prepared tender documentation packages for public and private sector bids.",
      "Improved client bid compliance and submission success rates.",
    ],
    technologies: ["ePADS", "Tender Management", "Compliance Review", "Documentation"],
  },
];
