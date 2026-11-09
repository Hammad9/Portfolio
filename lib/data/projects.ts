export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  image: string;
  gallery: string[];
  techStack: string[];
  categories: string[];
  role: string;
  responsibilities: string[];
  features: string[];
  duration?: string;
  client: string;
  industry: string;
  liveUrl?: string;
  caseStudyUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  
{
  id: "nanoshield",
  title: "NanoShield Roofing",
  tagline:
    "An AI-powered roofing customer engagement and business automation platform.",
  description:
    "A comprehensive digital transformation project for a roofing and property protection company. The platform combines GoHighLevel CRM, Conversation AI, Voice AI, intelligent lead qualification, automated customer follow-ups, sales pipeline management, and AI-powered conversation analysis to streamline roofing inquiries and customer acquisition.",
  problem:
    "NanoShield needed a centralized system to manage roofing inquiries, customer conversations, lead qualification, appointment requests, and sales follow-ups. Manual processes and disconnected customer interactions made it difficult to maintain consistent communication, track lead intent, and manage opportunities efficiently.",
  solution:
    "Implemented a GoHighLevel-based CRM and AI automation ecosystem with separate Conversation AI and Voice AI agents. Developed automated workflows for lead qualification, customer intent detection, appointment readiness, follow-up management, vendor message filtering, and lead routing. Designed an n8n and Google Gemini-based architecture for conversation analysis, lead categorization, and sales intelligence.",
  result:
    "Established a centralized customer engagement and lead management system connecting AI conversations, CRM records, sales opportunities, and automated communication workflows. Created a scalable foundation for intelligent lead qualification, structured follow-ups, sales visibility, and AI-assisted customer relationship management.",
  image: "/images/projects/nanoshield/gallery-1.png",
  gallery: [
    "/images/projects/nanoshield/cover.png",
    // "/images/projects/nanoshield/cover.png",
    "/images/projects/nanoshield/gallery-1.png",
    "/images/projects/nanoshield/gallery-2.png",
  ],
  techStack: [
    "GoHighLevel",
    "LeadConnector",
    "Conversation AI",
    "Voice AI",
    "n8n",
    "Google Gemini API",
    "REST APIs",
    "Mailgun",
    "Namecheap DNS",
    "Email Marketing Automation",
    "Hearth Financing Integration",
  ],
  categories: [
    "AI Automation",
    "CRM Integration",
    "Business Process Automation",
    "Marketing Automation",
  ],
  role: "CRM & AI Automation Developer",
  responsibilities: [
    "Configured GoHighLevel CRM pipelines, opportunity management, contact records, and custom fields",
    "Developed Conversation AI and Voice AI agents for automated customer engagement and roofing lead qualification",
    "Implemented structured customer information collection and appointment qualification requirements",
    "Designed automated workflows for short-term, mid-term, and long-term customer intent detection",
    "Built conditional workflow logic for lead follow-ups and customer response handling",
    "Implemented marketing and vendor solicitation detection and opportunity routing logic",
    "Designed n8n and Google Gemini integration architecture for AI-powered conversation analysis",
    "Developed lead categorization logic for CRM tagging, internal notes, and sales call recommendations",
    "Configured and troubleshot custom domain DNS, SPF, DKIM, DMARC, and email sending infrastructure",
    "Created branded HTML email newsletter templates and segmented email marketing campaigns",
    "Worked on appointment coordination, internal notifications, and financing integration requirements",
    "Troubleshot CRM contact field synchronization and opportunity data consistency",
  ],
  features: [
    "AI-powered website chat and customer engagement",
    "Voice AI for inbound roofing inquiries",
    "Automated lead qualification and contact information collection",
    "Customer and property information management",
    "Appointment qualification and coordination workflows",
    "GoHighLevel CRM and sales pipeline automation",
    "Short-term, mid-term, and long-term customer intent detection",
    "Automated conditional customer follow-ups",
    "Marketing and vendor message detection",
    "AI-powered conversation analysis using Google Gemini",
    "Automated lead categorization and CRM tagging",
    "Internal sales notes and AI-generated call recommendations",
    "Segmented email marketing and branded newsletters",
    "Custom email domain authentication and deliverability configuration",
    "Hearth financing integration support",
    "Automated appointment notifications",
  ],
  duration: "Ongoing engagement",
  client: "NanoShield LLC",
  industry: "Roofing & Construction",
  caseStudyUrl: "/case-studies/nanoshield",
  featured: true,
},
  {
    id: "dojo-plus",
    title: "Dojo+",
    tagline: "A dedicated social network for martial arts communities.",
    description:
      "A specialized social platform for martial artists, gyms, and event organizers. It replaces generic networks with profiles, achievement tracking, event records, and instructor certifications tailored to combat sports.",
    problem:
      "Schools and athletes were scattered across generic platforms and spreadsheets to track achievements, events, and credentials.",
    solution:
      "Built a Next.js platform with rich profiles, achievement showcases, event tracking, and instructor certification workflows.",
    result:
      "Created a central hub for martial arts identity and activity, reducing manual updates and giving schools a repeatable way to manage credentials.",
    image: "/images/projects/dojo-plus/cover.jpg",
    gallery: [
      "/images/projects/dojo-plus/gallery-1.png",
      "/images/projects/dojo-plus/gallery-2.png",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Material UI",
      "Airtable",
      "Google Fit API",
      "Blockchain",
    ],
    categories: ["Next.js", "Web Application", "Frontend"],
    role: "Full-Stack Developer",
    responsibilities: [
      "Architected the Next.js application structure and responsive screens",
      "Implemented user profiles, achievement showcases, and event participation tracking",
      "Built instructor certification management workflows",
      "Integrated Airtable and Google Fit API for data and activity syncing",
      "Delivered admin screens and content maintenance tools",
    ],
    features: [
      "User profiles with martial arts identity and achievement showcases",
      "Event participation tracking and history",
      "Instructor certification management",
      "Social discovery and community networking",
      "Airtable-backed operational data layer",
      "Google Fit API activity integration",
    ],
    duration: "Ongoing engagement",
    client: "Dojo+",
    industry: "Sports & Fitness",
    caseStudyUrl: "/case-studies/dojo-plus",
    featured: true,
  },
  {
    id: "spark-host",
    title: "Spark Host",
    tagline: "AI-powered social and email marketing for hospitality and property teams.",
    description:
      "A marketing dashboard that unifies social media, email campaigns, contact management, and property sync for hospitality teams.",
    problem:
      "Teams were juggling separate tools for social posts, email, contacts, and property data, slowing campaigns and fragmenting reporting.",
    solution:
      "Developed a Next.js App Router dashboard with JWT auth, Stripe billing, social Graph API integrations, Lodgify sync, an AI content assistant, and a drag-and-drop email editor.",
    result:
      "Centralized marketing workflows, reduced tool switching, and gave teams clearer campaign ownership.",
    image: "/images/projects/spark-host/cover.jpg",
    gallery: [
      "/images/projects/spark-host/gallery-1.jpg",
      "/images/projects/spark-host/gallery-2.avif",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Next.js App Router",
      "Material UI",
      "MUI X Data Grid",
      "TanStack Query",
      "Redux Toolkit",
      "Strapi API",
      "Stripe",
      "Lodgify API",
      "Facebook Graph API",
      "Instagram Graph API",
      "Cloudinary API",
      "FullCalendar",
      "React Email Editor",
    ],
    categories: ["Next.js", "Web Application", "Business Automation", "Frontend"],
    role: "Full-Stack Developer",
    responsibilities: [
      "Implemented the Next.js App Router dashboard and responsive UI",
      "Built authentication, subscription, and account settings flows",
      "Integrated Facebook and Instagram Graph APIs for publishing and scheduling",
      "Connected Lodgify API for property synchronization",
      "Developed the AI content assistant and social post composer",
      "Created the email campaign builder with drag-and-drop editor",
      "Set up media library, contact CSV import, and analytics screens",
    ],
    features: [
      "JWT authentication and Stripe subscription billing",
      "Facebook and Instagram account connection and post scheduling",
      "AI content assistant for marketing copy",
      "Social post composer with draft, scheduled, and published states",
      "Drag-and-drop email campaign builder",
      "Lodgify property synchronization",
      "Contact database with CSV import and media library",
      "Product tours and notification drawer",
    ],
    duration: "Ongoing engagement",
    client: "Spark Host",
    industry: "Hospitality & Property Marketing",
    liveUrl: "#",
    caseStudyUrl: "/case-studies/spark-host",
    featured: true,
  },
  {
    id: "pivdc-website",
    title: "PiVDC Website",
    tagline: "BIM/VDC automation product portal for Pinnacle Infotech.",
    description:
      "A public product portal and authenticated customer workspace for Pinnacle Infotech's BIM/VDC automation tools.",
    problem:
      "Discovery, customer self-service, and internal admin were spread across disconnected touchpoints.",
    solution:
      "Built a React/Next.js portal with AWS Amplify, AppSync GraphQL, Cognito auth, role-based access, AI copilot search, and a super-admin console.",
    result:
      "Unified product marketing, customer operations, and admin control into one scalable platform.",
    image: "/images/projects/pivdc/cover.jpg",
    gallery: [
      "/images/projects/pivdc/gallery-1.jpg",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Next.js Pages Router",
      "Material UI",
      "MUI X Data Grid Pro",
      "TanStack Query",
      "AWS Amplify",
      "AWS AppSync",
      "AWS Cognito",
      "GraphQL",
      "GraphQL Subscriptions",
      "AWS S3 Pre-signed Uploads",
      "Google Analytics",
      "Vercel Analytics",
    ],
    categories: ["Next.js", "Web Application", "Website", "Frontend"],
    role: "Full-Stack Developer",
    responsibilities: [
      "Built public marketing pages and BIM/VDC product discovery experience",
      "Implemented AWS Cognito authentication and role-based access control",
      "Developed customer dashboards with assigned packages and requisition workflows",
      "Created super-admin modules for packages, add-ins, installers, organizations, and invoices",
      "Integrated AI copilot search with streaming GraphQL responses",
      "Added release notes management, QR code generation, CSV export, and SEO sitemap",
    ],
    features: [
      "Public marketing website and product discovery pages",
      "AI copilot search with streaming GraphQL responses",
      "AWS Cognito authentication with Google federated sign-in",
      "Role-based access control and account dashboards",
      "Requisition submission, voting, comments, and attachments",
      "Super-admin console for packages, add-ins, installers, and organizations",
      "QR code generator, CSV export, and analytics",
    ],
    duration: "Ongoing engagement",
    client: "Pinnacle Infotech",
    industry: "AEC / BIM Software",
    caseStudyUrl: "/case-studies/pivdc-website",
    featured: true,
  },
  {
    id: "dojo-plus-school",
    title: "Dojo+ School",
    tagline: "A discovery directory for martial arts schools and programs.",
    description:
      "A searchable directory that helps students discover martial arts schools by discipline, location, schedule, and program details.",
    problem:
      "School information was scattered across websites, social pages, and listing services, making comparison difficult.",
    solution:
      "Developed a Next.js directory with listing pages, rich school profiles, and location-based browsing tied to the Dojo+ data layer.",
    result:
      "Centralized school discovery and gave gyms a professional, searchable presence.",
    image: "/images/projects/dojo-plus-school/cover.avif",
    gallery: [
      "/images/projects/dojo-plus-school/gallery-1.avif",
      "/images/projects/dojo-plus-school/gallery-2.avif",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Material UI",
      "Airtable",
      "Google Fit API",
      "Blockchain",
    ],
    categories: ["Next.js", "Website", "Frontend"],
    role: "Full-Stack Developer",
    responsibilities: [
      "Built directory listing and school profile pages",
      "Implemented location-based browsing and filtering",
      "Connected school data to the shared Dojo+ data layer",
      "Delivered responsive layouts optimized for mobile discovery",
      "Created admin tools for maintaining school listings",
    ],
    features: [
      "School directory pages with search and filtering",
      "Detailed school profile pages",
      "Location-focused browsing",
      "Mobile-responsive discovery experience",
      "Shared data layer with the Dojo+ ecosystem",
    ],
    duration: "Ongoing engagement",
    client: "Dojo+",
    industry: "Education Technology",
    caseStudyUrl: "/case-studies/dojo-plus-school",
    featured: true,
  },
  {
    id: "dojo-plus-sites",
    title: "Dojo+ Sites",
    tagline: "Templated, branded websites for martial arts schools.",
    description:
      "A website-builder layer that gives martial arts gyms fast, branded sites with templates, custom domains, and built-in lead capture.",
    problem:
      "Custom sites per gym were too slow and expensive; operators needed brand control and lead capture without managing separate hosting.",
    solution:
      "Built a Next.js platform for templated school sites with subdomain/custom-domain support, schedule pages, contact forms, and lead capture.",
    result:
      "Enabled fast, credible website launches managed from a single platform.",
    image: "/images/projects/dojo-plus-sites/cover.jpg",
    gallery: [
      "/images/projects/dojo-plus-sites/gallery-1.avif",
      "/images/projects/dojo-plus-sites/gallery-2.avif",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Material UI",
      "Airtable",
      "Google Fit API",
      "Blockchain",
    ],
    categories: ["Next.js", "Website", "Business Automation", "Frontend"],
    role: "Full-Stack Developer",
    responsibilities: [
      "Architected the templated site generation system",
      "Implemented subdomain and custom-domain routing",
      "Built school website, schedule, and contact page templates",
      "Integrated lead capture forms and admin management tools",
      "Ensured responsive, brand-consistent output across all generated sites",
    ],
    features: [
      "Templated school website generation",
      "Subdomain and custom-domain support",
      "Public school profile, schedule, and contact pages",
      "Integrated lead capture forms",
      "Centralized admin management",
      "Responsive, brand-consistent output",
    ],
    duration: "Ongoing engagement",
    client: "Dojo+",
    industry: "Sports & Fitness",
    caseStudyUrl: "/case-studies/dojo-plus-sites",
    featured: false,
  },
  {
    id: "inherit-flutterflow",
    title: "INHerit",
    tagline: "Family health history mobile app built with FlutterFlow.",
    description:
      "A FlutterFlow mobile app that helps users collect family health history, connect with relatives, and receive personalized appointment support.",
    problem:
      "Family health history, surveys, records, and appointment context were siloed across paper, portals, and memory.",
    solution:
      "Contributed to the FlutterFlow app, integrating Firebase and Django with Azure SQL for family-history, survey, record, and reward workflows.",
    result:
      "Delivered a structured, mobile-first family-health experience that reduced scattered manual effort.",
    image: "/images/projects/inherit/cover.jpeg",
    gallery: [
      "/images/projects/inherit/gallery-1.jpeg",
      "/images/projects/inherit/gallery-2.jpeg",
    ],
    techStack: [
      "FlutterFlow",
      "Firebase",
      "Django",
      "Azure SQL",
      "REST APIs",
      "Responsive Design",
    ],
    categories: ["FlutterFlow", "Web Application", "Business Automation"],
    role: "Mobile & Backend Contributor",
    responsibilities: [
      "Built user-facing screens and flows in FlutterFlow",
      "Integrated Firebase for authentication, data, and real-time features",
      "Connected Django backend services for operational records and business logic",
      "Worked with Azure SQL for structured health-related data",
      "Supported research participation and reward workflows",
    ],
    features: [
      "Family health history collection",
      "Survey and health record workflows",
      "Biological-relative connections",
      "Appointment support and preparation",
      "Research participation with rewards",
      "Cross-platform mobile experience",
    ],
    duration: "Ongoing engagement",
    client: "INHerit",
    industry: "Health Technology",
    caseStudyUrl: "/case-studies/inherit-flutterflow",
    featured: true,
  },
  {
    id: "rarecan-flutterflow",
    title: "RareCan",
    tagline: "Data-driven rare cancer analysis and prognosis platform.",
    description:
      "A data-driven platform that structures rare cancer research data to analyze survival outcomes and support personalized prognosis decisions.",
    problem:
      "Rare cancer cases and comparable patient histories were not structured for analysis, making personalized insights hard to surface.",
    solution:
      "Contributed to structured data workflows, patient-outcome comparison, survival analysis, and prognosis prediction interfaces.",
    result:
      "Improved visibility into patient-history comparisons and created a foundation for future analytics.",
    image: "/images/projects/rarecan/cover.jpg",
    gallery: [
      "/images/projects/rarecan/gallery-1.png",
      "/images/projects/rarecan/gallery-2.png",
    ],
    techStack: [
      "FlutterFlow",
      "Firebase",
      "REST APIs",
      "Responsive Design",
      "Data Visualization",
    ],
    categories: ["FlutterFlow", "Web Application", "Business Automation"],
    role: "Project Contributor",
    responsibilities: [
      "Supported the design of structured rare-cancer data workflows",
      "Built user flows for patient-outcome comparison and survival analysis",
      "Contributed to prognosis prediction and decision-support interfaces",
      "Ensured responsive, accessible layouts for clinical users",
      "Helped establish admin screens and repeatable research workflows",
    ],
    features: [
      "Rare cancer research data analysis",
      "Patient outcome comparison",
      "Survival outcome analysis",
      "Prognosis prediction",
      "Similar-patient history matching",
      "Personalized treatment decision support",
    ],
    duration: "Ongoing engagement",
    client: "RareCan",
    industry: "Health Technology",
    caseStudyUrl: "/case-studies/rarecan-flutterflow",
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const projectCategories = [
  "All",
  "Frontend",
  "Next.js",
  "FlutterFlow",
  "Business Automation",
  "Web Application",
  "Website",
];
