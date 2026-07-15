export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
}

export const aboutTimeline: TimelineEvent[] = [
  {
    id: "start",
    year: "2019",
    title: "Discovered Programming",
    description:
      "Started learning web development out of curiosity. Built small projects and realized that code could solve real business problems.",
  },
  {
    id: "first-clients",
    year: "2020",
    title: "First Freelance Projects",
    description:
      "Began taking on freelance frontend projects. Learned how to translate client requirements into working interfaces under real deadlines.",
  },
  {
    id: "react-nextjs",
    year: "2021",
    title: "Specialized in React & Next.js",
    description:
      "Deepened expertise in modern React patterns, TypeScript, and the Next.js ecosystem to build scalable applications.",
  },
  {
    id: "dojo-plus",
    year: "2022",
    title: "Built Dojo+ Ecosystem",
    description:
      "Started developing the Dojo+ social platform, school directory, and website builder — unifying martial arts communities with Next.js.",
  },
  {
    id: "spark-host-pivdc",
    year: "2023",
    title: "Scaled Complex Dashboards",
    description:
      "Delivered Spark Host marketing dashboard and PiVDC BIM/VDC portal, integrating social APIs, property data, AWS services, and AI search.",
  },
  {
    id: "flutterflow-health",
    year: "2024",
    title: "Expanded into FlutterFlow",
    description:
      "Contributed to FlutterFlow mobile apps for health technology clients, including INHerit and RareCan, connecting Firebase, Django, and Azure SQL backends.",
  },
  {
    id: "today",
    year: "Today",
    title: "Full-Stack Problem Solver",
    description:
      "Combining software engineering, mobile development, automation, and procurement expertise to deliver business outcomes for clients across industries.",
  },
];

export const whyWorkWithMe = [
  {
    id: "business-first",
    title: "Business-First Mindset",
    description:
      "I don't write code for the sake of code. Every feature, component, and workflow is chosen because it moves your business forward.",
  },
  {
    id: "clean-architecture",
    title: "Clean Architecture",
    description:
      "I structure projects so they are easy to understand, extend, and maintain — reducing technical debt and future costs.",
  },
  {
    id: "scalable-applications",
    title: "Scalable Applications",
    description:
      "From day one, I design with growth in mind so your product can handle more users, features, and markets without rebuilding.",
  },
  {
    id: "maintainable-code",
    title: "Maintainable Code",
    description:
      "Readable, documented, and testable code that the next developer — or your future team — can pick up and improve.",
  },
  {
    id: "problem-solving",
    title: "Problem-Solving",
    description:
      "I enjoy untangling complex requirements and finding simple, elegant solutions that actually work in production.",
  },
  {
    id: "automation-expertise",
    title: "Automation Expertise",
    description:
      "I identify repetitive tasks and build workflows that save time, reduce errors, and keep your team focused on high-value work.",
  },
  {
    id: "communication",
    title: "Clear Communication",
    description:
      "I explain technical decisions in plain language, keep stakeholders informed, and align my work with your priorities.",
  },
  {
    id: "long-term-support",
    title: "Long-Term Support",
    description:
      "I don't disappear after launch. I provide ongoing support, iterations, and strategic advice as your needs evolve.",
  },
];

export const aboutContent = {
  journey: [
    "My journey into technology started with a simple question: how can software make businesses run better? That curiosity led me from building basic websites to architecting full-featured applications used by real teams.",
    "Over the years, I've worked with startups, agencies, and established businesses to deliver frontend applications, automation systems, and procurement tools. Each project taught me that the best technology is the kind that solves a problem cleanly and scales quietly.",
    "Today, I operate at the intersection of software engineering, mobile development, business automation, and digital procurement. Whether it's a Next.js dashboard, a FlutterFlow health app, a GoHighLevel workflow, or an ePADS registration, my focus is always the same: deliver outcomes that matter.",
  ],
  philosophy:
    "Technology should reduce friction, not create it. I believe in building products that are fast, reliable, and easy to use — products that make teams more productive and businesses more profitable.",
  passion:
    "I am passionate about turning complex business challenges into simple, elegant digital solutions. Nothing beats the moment a client realizes their workflow just got hours faster or their lead conversion jumped because of a system I built.",
};
