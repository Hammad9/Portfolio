export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  duration?: string;
  summary: string;
  overview: string;
  problem: string;
  solution: string;
  role: string;
  responsibilities: string[];
  features: string[];
  technologies: string[];
  challenges: string[];
  results: string[];
  impact: string;
  lessons: string;
  image: string;
  gallery: string[];
  slug: string;
}

export const caseStudies: CaseStudy[] = [
  
{
  id: "nanoshield",
  title: "Transforming Roofing Operations with AI-Powered Customer Engagement and Automation",
  client: "NanoShield LLC",
  industry: "Roofing & Construction",
  duration: "Ongoing engagement",
  summary:
    "How I connected AI-powered customer conversations, CRM automation, and intelligent lead management to streamline roofing customer acquisition and business operations.",
  overview:
    "An AI-powered customer engagement and business automation ecosystem developed for NanoShield Roofing, a roof protection and rejuvenation company serving Northeast Ohio. The solution combines GoHighLevel CRM, Conversation AI, Voice AI, automated workflows, and AI-powered conversation intelligence to manage customer inquiries, qualify roofing leads, coordinate appointments, and streamline sales operations.",
  problem:
    "NanoShield needed a centralized approach to managing incoming roofing inquiries, customer conversations, lead qualification, appointment requests, and sales follow-ups. Repetitive customer interactions, fragmented information, and manual lead management made it challenging to maintain consistent communication and track customer readiness across different sales pipeline stages. The business also needed structured email marketing infrastructure and better visibility into lead intent.",
  solution:
    "Designed and implemented a GoHighLevel-based CRM and AI automation ecosystem featuring separate Conversation AI and Voice AI agents. Developed structured lead qualification rules, customer information collection, appointment readiness checks, conditional follow-up workflows, customer intent detection, and vendor message filtering. Designed an n8n and Google Gemini-based conversation intelligence architecture to analyze CRM conversations, categorize leads, generate internal sales notes, and prepare actionable call recommendations. Also worked on branded email marketing, domain authentication, and customer financing integration requirements.",
  role: "CRM & AI Automation Developer",
  responsibilities: [
    "Configured GoHighLevel CRM pipelines, opportunity management, contact records, and custom fields",
    "Developed Conversation AI agents for website messaging and automated customer engagement",
    "Configured Voice AI agents for inbound roofing inquiries and lead qualification",
    "Implemented structured customer information collection for names, emails, phone numbers, and property addresses",
    "Designed appointment qualification rules to prevent scheduling when required customer information was missing",
    "Built customer intent detection workflows for short-term, mid-term, and long-term buying delays",
    "Developed conditional follow-up automation with customer response detection and stopping conditions",
    "Implemented marketing and vendor solicitation detection and opportunity routing logic",
    "Designed n8n and Google Gemini integration architecture for automated conversation analysis",
    "Developed lead categorization and CRM intelligence workflows for tags, internal notes, and sales call recommendations",
    "Configured and troubleshot DNS records, SPF, DKIM, DMARC, and branded email sending infrastructure",
    "Created HTML email newsletter templates and segmented customer marketing campaigns",
    "Worked on appointment notifications, calendar coordination, and Hearth financing integration requirements",
    "Troubleshot CRM contact field synchronization and opportunity data consistency",
  ],
  features: [
    "AI-powered website messaging and customer engagement",
    "Voice AI for inbound roofing inquiries",
    "Automated lead qualification and customer information collection",
    "Property address and roofing information management",
    "Appointment readiness validation and coordination",
    "GoHighLevel CRM and opportunity pipeline management",
    "Automated short-term, mid-term, and long-term intent detection",
    "Conditional customer follow-up and response monitoring",
    "Marketing agency and vendor solicitation detection",
    "AI-powered conversation analysis using Google Gemini",
    "Automated lead categorization and CRM tagging",
    "Internal sales notes and AI-generated call recommendations",
    "n8n workflow automation architecture",
    "Segmented email marketing and branded HTML newsletters",
    "Custom domain configuration and email authentication",
    "Hearth financing integration support",
    "Appointment notifications and internal sales coordination",
  ],
  technologies: [
    "GoHighLevel",
    "LeadConnector",
    "Conversation AI",
    "Voice AI",
    "n8n",
    "Google Gemini API",
    "REST APIs",
    "Webhooks",
    "Mailgun",
    "Namecheap DNS",
    "SPF / DKIM / DMARC",
    "HTML",
    "CSS",
    "Email Marketing Automation",
    "Hearth Financing",
  ],
  challenges: [
    "Designing separate Conversation AI and Voice AI instructions while maintaining consistent customer qualification rules across both communication channels.",
    "Ensuring AI agents collected all required customer information before creating appointments.",
    "Preventing duplicate questions by checking existing CRM contact records and conversation history before requesting information.",
    "Building reliable intent detection to distinguish short-term, mid-term, and long-term customer delays without triggering multiple workflows.",
    "Creating conditional follow-up sequences that stop correctly when customers respond or indicate they no longer wish to be contacted.",
    "Distinguishing genuine roofing prospects from marketing agencies, SEO providers, and other vendor solicitations.",
    "Designing a scalable conversation intelligence architecture to process large numbers of CRM opportunities and generate useful sales insights.",
    "Troubleshooting DNS configuration and email authentication while protecting the existing website and email services.",
  ],
  results: [
    "Established a centralized GoHighLevel CRM structure for managing customer records and roofing opportunities.",
    "Implemented separate AI agent configurations for website conversations and phone interactions.",
    "Created structured lead qualification and appointment readiness requirements.",
    "Designed automated workflows for customer intent detection, follow-ups, and vendor message filtering.",
    "Prepared an AI-powered conversation intelligence workflow architecture using n8n and Google Gemini.",
    "Established a segmented newsletter strategy for prospects, active proposals, and existing customers.",
    "Developed a repeatable foundation for automated customer engagement and sales operations.",
  ],
  impact:
    "NanoShield gained a centralized AI-driven customer engagement and CRM automation architecture connecting website inquiries, phone conversations, customer records, sales opportunities, and follow-up processes. The project established a foundation for more structured lead management, intelligent customer communication, and scalable roofing business operations.",
  lessons:
    "Successful AI automation requires more than connecting an AI model to a CRM. The real value comes from designing reliable business rules, maintaining accurate customer data, controlling workflow execution, and ensuring that AI decisions align with actual operational requirements.",
  image: "/images/projects/nanoshield/gallery-1.png",
  gallery: [
    "/images/projects/nanoshield/cover.png",
    "/images/projects/nanoshield/gallery-2.png",
  ],
  slug: "nanoshield",
},
  {
    id: "dojo-plus",
    title: "Unifying Martial Arts Communities on a Dedicated Social Platform",
    client: "Dojo+",
    industry: "Sports & Fitness",
    duration: "Ongoing engagement",
    summary:
      "How I replaced scattered social profiles with a dedicated platform for martial arts identity, achievements, and events.",
    overview:
      "A social network built specifically for martial artists, gyms, and event organizers. It structures identity around achievements, event participation, and verified instructor credentials.",
    problem:
      "Martial artists and schools were using generic social networks and spreadsheets to track achievements, events, and certifications.",
    solution:
      "Built a Next.js platform with structured profiles, achievement showcases, event tracking, and instructor certification management, backed by Airtable and Google Fit API.",
    role: "Full-Stack Developer",
    responsibilities: [
      "Architected the Next.js application and responsive user-facing screens",
      "Implemented profiles, achievements, event tracking, and certification workflows",
      "Integrated Airtable as an operational data layer and Google Fit API for activity data",
      "Built admin screens and dashboards for content maintenance",
      "Maintained performance and accessibility across the platform",
    ],
    features: [
      "User profiles with martial arts identity and achievement showcases",
      "Event participation tracking and history",
      "Instructor certification management",
      "Social discovery and community networking",
      "Airtable-backed operational data layer",
      "Google Fit API activity integration",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Material UI",
      "Formik",
      "Yup",
      "React Slick",
      "Airtable",
      "Google Fit API",
      "Blockchain",
    ],
    challenges: [
      "Mapping martial-arts-specific concepts like belt progression and event brackets into a structured data model.",
      "Coordinating multiple external services while keeping the user experience fast and consistent.",
      "Designing an admin interface that non-technical gym operators could manage independently.",
    ],
    results: [
      "Delivered a centralized platform for martial arts profiles, achievements, and events.",
      "Reduced fragmented manual tracking across schools and members.",
      "Created a repeatable workflow for instructor certification management.",
    ],
    impact:
      "Dojo+ became the single source of truth for martial arts identity and activity, replacing scattered posts and spreadsheets.",
    lessons:
      "Design around the operating workflow first. When the data model matches how the community works, adoption follows.",
    image: "/images/projects/dojo-plus/cover.jpg",
    gallery: [
      "/images/projects/dojo-plus/gallery-1.png",
      "/images/projects/dojo-plus/gallery-2.png",
    ],
    slug: "dojo-plus",
  },
  {
    id: "spark-host",
    title: "Building a Marketing Operating System for Hospitality Teams",
    client: "Spark Host",
    industry: "Hospitality & Property Marketing",
    duration: "Ongoing engagement",
    summary:
      "How I consolidated social publishing, email campaigns, AI content, and property sync into one hospitality marketing dashboard.",
    overview:
      "A marketing dashboard that helps hospitality teams plan, create, schedule, and analyze social and email campaigns from one place.",
    problem:
      "Teams were jumping between social tools, email platforms, spreadsheets, and property systems, slowing campaigns and fragmenting reporting.",
    solution:
      "Developed a Next.js App Router dashboard with JWT auth, Stripe billing, social Graph APIs, Lodgify sync, an AI content assistant, and a drag-and-drop email editor.",
    role: "Full-Stack Developer",
    responsibilities: [
      "Implemented the Next.js App Router dashboard and responsive UI",
      "Built authentication, subscription, and account management flows",
      "Integrated Facebook and Instagram Graph APIs for publishing and scheduling",
      "Connected Lodgify API to sync property data into campaigns",
      "Developed the AI content assistant and social post composer",
      "Created the email campaign builder and media library",
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
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Next.js App Router",
      "Material UI",
      "MUI X Data Grid",
      "TanStack Query",
      "Redux Toolkit",
      "Strapi API",
      "JWT Auth",
      "Stripe",
      "Lodgify API",
      "Facebook Graph API",
      "Instagram Graph API",
      "Cloudinary API",
      "FullCalendar",
      "React Email Editor",
      "Framer Motion",
    ],
    challenges: [
      "Coordinating state across social APIs, scheduling, and post-status transitions without data drift.",
      "Designing a content composer that felt simple for non-marketers but powerful enough for multi-channel campaigns.",
      "Managing external API rate limits and failure states gracefully.",
    ],
    results: [
      "Unified social, email, and property data into a single marketing workflow.",
      "Improved campaign visibility and ownership across hospitality teams.",
      "Reduced tool switching and manual coordination for recurring campaigns.",
    ],
    impact:
      "Turned a scattered marketing stack into a coherent operating system, helping teams publish faster and maintain brand consistency.",
    lessons:
      "Multi-integration products survive on state clarity. Every API response and UI element must communicate post status instantly.",
    image: "/images/projects/spark-host/cover.jpg",
    gallery: [
      "/images/projects/spark-host/gallery-1.jpg",
      "/images/projects/spark-host/gallery-2.avif",
    ],
    slug: "spark-host",
  },
  {
    id: "pivdc-website",
    title: "Creating a Unified Portal for BIM/VDC Automation Products",
    client: "Pinnacle Infotech",
    industry: "AEC / BIM Software",
    duration: "Ongoing engagement",
    summary:
      "How I built a unified portal for BIM/VDC product discovery, customer self-service, and internal administration.",
    overview:
      "A digital portal that merges public marketing pages, product discovery, AI search, demo requests, customer dashboards, and super-admin controls.",
    problem:
      "Discovery, customer workspaces, and internal admin were served through disconnected touchpoints.",
    solution:
      "Built a React/Next.js portal with AWS Amplify, AppSync GraphQL, Cognito auth, role-based access, AI copilot search, and a super-admin console.",
    role: "Full-Stack Developer",
    responsibilities: [
      "Built public marketing pages and BIM/VDC product discovery flows",
      "Implemented AWS Cognito authentication with Google federated sign-in",
      "Developed customer dashboards and requisition submission workflows",
      "Created super-admin modules for packages, add-ins, installers, organizations, and invoices",
      "Integrated AI copilot search with streaming GraphQL responses",
      "Added release notes, QR codes, CSV export, and SEO sitemap support",
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
    technologies: [
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
    challenges: [
      "Designing a data model flexible enough for packages, add-ins, installers, and customer assignments.",
      "Implementing streaming GraphQL responses for the AI copilot search experience.",
      "Balancing public marketing performance with authenticated application complexity.",
    ],
    results: [
      "Delivered a single portal for product discovery, customer self-service, and internal administration.",
      "Improved visibility into requisition and package-assignment workflows.",
      "Reduced maintenance overhead by centralizing content and admin tools.",
    ],
    impact:
      "Became the commercial and operational front door for Pinnacle Infotech's automation products, replacing fragmented tools.",
    lessons:
      "Enterprise portals succeed when admin control is built in from day one. Operations teams must update content and users without engineering help.",
    image: "/images/projects/pivdc/cover.jpg",
    gallery: [
      "/images/projects/pivdc/gallery-1.jpg",
    ],
    slug: "pivdc-website",
  },
  {
    id: "dojo-plus-school",
    title: "Centralizing Martial Arts School Discovery",
    client: "Dojo+",
    industry: "Education Technology",
    duration: "Ongoing engagement",
    summary:
      "How I created a structured directory for discovering martial arts schools by discipline, location, and program details.",
    overview:
      "The directory layer of the Dojo+ ecosystem, unifying school discovery with rich profiles and location-based browsing.",
    problem:
      "School details were scattered across websites, social pages, and listing services, making comparison difficult.",
    solution:
      "Developed a Next.js directory with listings, detailed profiles, and location-based browsing that shares data with the broader Dojo+ platform.",
    role: "Full-Stack Developer",
    responsibilities: [
      "Built directory listing and school profile pages",
      "Implemented location-based browsing and filtering",
      "Connected school data to the shared Dojo+ data layer",
      "Optimized layouts for mobile-first discovery",
      "Created admin tools for maintaining school listings",
    ],
    features: [
      "School directory pages with search and filtering",
      "Detailed school profile pages",
      "Location-focused browsing",
      "Mobile-responsive discovery experience",
      "Shared data layer with the Dojo+ ecosystem",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Material UI",
      "Formik",
      "Yup",
      "React Slick",
      "Airtable",
      "Google Fit API",
      "Blockchain",
    ],
    challenges: [
      "Normalizing inconsistent school data into a structured, searchable directory format.",
      "Designing a mobile discovery experience that works for both browsing and detailed comparison.",
      "Keeping directory listings synchronized with the main Dojo+ platform.",
    ],
    results: [
      "Centralized martial arts school discovery into one searchable directory.",
      "Reduced fragmented research for prospective students and families.",
      "Gave gyms a professional, discoverable presence within the Dojo+ ecosystem.",
    ],
    impact:
      "Transformed school discovery from a scattered web search into a structured, trustworthy directory.",
    lessons:
      "Directory products only work if the data feels trustworthy. Clean filters and consistent formatting matter more than listing count.",
    image: "/images/projects/dojo-plus-school/cover.avif",
    gallery: [
      "/images/projects/dojo-plus-school/gallery-1.avif",
      "/images/projects/dojo-plus-school/gallery-2.avif",
    ],
    slug: "dojo-plus-school",
  },
  {
    id: "dojo-plus-sites",
    title: "Launching Branded Websites at Scale for Martial Arts Gyms",
    client: "Dojo+",
    industry: "Sports & Fitness",
    duration: "Ongoing engagement",
    summary:
      "How I built a templated website platform that gives martial arts gyms fast, branded sites with custom domains and built-in lead capture.",
    overview:
      "A website-builder layer that lets gyms launch professional sites from templates with schedules, contact pages, and lead capture.",
    problem:
      "Custom sites per gym were too slow and expensive; operators lacked budget and technical resources for separate hosting and design tools.",
    solution:
      "Built a Next.js platform with templated sites, subdomain and custom-domain support, and lead capture flows managed from a central admin.",
    role: "Full-Stack Developer",
    responsibilities: [
      "Architected the templated site generation system",
      "Implemented subdomain and custom-domain routing",
      "Built school website, schedule, and contact page templates",
      "Integrated lead capture forms and admin management tools",
      "Ensured responsive, brand-consistent output across generated sites",
    ],
    features: [
      "Templated school website generation",
      "Subdomain and custom-domain support",
      "Public school profile, schedule, and contact pages",
      "Integrated lead capture forms",
      "Centralized admin management",
      "Responsive, brand-consistent output",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Material UI",
      "Formik",
      "Yup",
      "React Slick",
      "Airtable",
      "Google Fit API",
      "Blockchain",
    ],
    challenges: [
      "Designing a template system flexible enough for different gym brands while staying consistent.",
      "Handling subdomain and custom-domain routing securely and performantly.",
      "Making generated sites feel custom while sharing infrastructure and admin tools.",
    ],
    results: [
      "Enabled fast, branded website launches for martial arts schools.",
      "Centralized site management, domains, and lead capture in one platform.",
      "Reduced dependency on custom builds and external hosting tools.",
    ],
    impact:
      "Gave gyms a credible web presence in hours instead of weeks, turning website creation into a repeatable product feature.",
    lessons:
      "Templated sites succeed when the template feels like a starting point, not a cage.",
    image: "/images/projects/dojo-plus-sites/cover.jpg",
    gallery: [
      "/images/projects/dojo-plus-sites/gallery-1.avif",
      "/images/projects/dojo-plus-sites/gallery-2.avif",
    ],
    slug: "dojo-plus-sites",
  },
  {
    id: "inherit-flutterflow",
    title: "Connecting Family Health History Through a FlutterFlow Mobile App",
    client: "INHerit",
    industry: "Health Technology",
    duration: "Ongoing engagement",
    summary:
      "How I contributed to a FlutterFlow health app that helps users collect family health history and connect with relatives.",
    overview:
      "A mobile health app that turns disconnected family health information into an actionable workflow of surveys, records, and appointment support.",
    problem:
      "Family health history, surveys, records, and appointment context were siloed across paper, portals, and memory.",
    solution:
      "Contributed to the FlutterFlow app, integrating Firebase for real-time data and Django with Azure SQL for operational records.",
    role: "Mobile & Backend Contributor",
    responsibilities: [
      "Built user-facing screens and responsive flows in FlutterFlow",
      "Integrated Firebase for authentication, data sync, and real-time features",
      "Connected Django backend services for records and business logic",
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
    technologies: [
      "FlutterFlow",
      "Firebase",
      "Django",
      "Azure SQL",
      "REST APIs",
      "Responsive Design",
    ],
    challenges: [
      "Designing a health workflow that feels personal and simple while handling sensitive family data responsibly.",
      "Coordinating FlutterFlow frontend logic with Firebase and Django backend services.",
      "Building flows that work across devices and remain accessible to a broad user base.",
    ],
    results: [
      "Delivered a mobile app covering family health history, surveys, records, and appointment support.",
      "Reduced scattered manual effort by centralizing family-health workflows.",
      "Improved visibility for users, admins, and research operators.",
    ],
    impact:
      "Gave users a structured way to understand and act on family health history through a supportive, mobile-first experience.",
    lessons:
      "Health apps must earn trust before usage. Clear data flow and simple next steps matter more than feature density.",
    image: "/images/projects/inherit/cover.jpeg",
    gallery: [
      "/images/projects/inherit/gallery-1.jpeg",
      "/images/projects/inherit/gallery-2.jpeg",
    ],
    slug: "inherit-flutterflow",
  },
  {
    id: "rarecan-flutterflow",
    title: "Personalizing Rare Cancer Insights with a Data-Driven Platform",
    client: "RareCan",
    industry: "Health Technology",
    duration: "Ongoing engagement",
    summary:
      "How I contributed to a platform that structures rare cancer data to support personalized prognosis insights.",
    overview:
      "A health-technology platform that compares patient cases with similar histories and analyzes survival outcomes to support research teams.",
    problem:
      "Rare cancer cases and comparable patient histories were not structured for analysis, making personalized insights difficult.",
    solution:
      "Contributed to structured data workflows, patient-outcome comparison, survival analysis, and prognosis prediction interfaces.",
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
    technologies: [
      "FlutterFlow",
      "Firebase",
      "REST APIs",
      "Responsive Design",
      "Data Visualization",
    ],
    challenges: [
      "Structuring sparse rare-cancer data into comparable patient histories.",
      "Designing decision-support interfaces that are informative without overstating confidence.",
      "Balancing clinical rigor with an accessible user experience.",
    ],
    results: [
      "Delivered a structured platform for rare cancer research data analysis.",
      "Improved visibility into patient-history comparisons and survival outcomes.",
      "Made rare-cancer analysis workflows more repeatable.",
    ],
    impact:
      "Helps research teams move from isolated cases to structured, comparable insights for more informed treatment conversations.",
    lessons:
      "In clinical decision-support, clarity beats complexity. A well-designed comparison helps humans make better decisions.",
    image: "/images/projects/rarecan/cover.jpg",
    gallery: [
      "/images/projects/rarecan/gallery-1.png",
      "/images/projects/rarecan/gallery-2.png",
    ],
    slug: "rarecan-flutterflow",
  },
];
