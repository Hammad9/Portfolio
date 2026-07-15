import { siteConfig } from "@/lib/constants";

export const personalInfo = {
  name: "Muhammad Hammad",
  firstName: "Muhammad",
  lastName: "Hammad",
  title: "Software Engineer",
  headlines: [
    "Software Engineer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "FlutterFlow Developer",
    "GoHighLevel Automation Specialist",
    "Digital Procurement Consultant",
  ],
  location: "Pakistan",
  summary:
    "I build modern web applications, FlutterFlow mobile apps, automate business workflows, and help organizations navigate Pakistan's digital procurement ecosystem. I specialize in developing scalable, high-performance, business-focused software using modern frontend technologies. Besides software engineering, I also help organizations implement CRM automation using GoHighLevel and support businesses with vendor registration, tender participation, compliance reviews, and digital procurement processes through ePADS. My passion is solving business problems through technology.",
  shortBio:
    "Software engineer turning business problems into scalable digital products. I specialize in React, Next.js, FlutterFlow mobile development, GoHighLevel automation, and Pakistan's ePADS procurement ecosystem.",
  email: siteConfig.email,
  phone: "+923074129929",
  whatsapp: siteConfig.whatsapp,
  linkedin: siteConfig.linkedin,
  github: siteConfig.github,
  twitter: siteConfig.twitter,
  resumeUrl: siteConfig.resumeUrl,
  availability: "Open to freelance, contract, and full-time opportunities",
  profileImage: "/images/profile.png",
};

export const stats = [
  { label: "Projects Delivered", value: 9, suffix: "+" },
  { label: "Years Experience", value: 4, suffix: "+" },
  { label: "Technologies", value: 30, suffix: "+" },
  { label: "Satisfied Clients", value: 5, suffix: "+" },
];

export const socialLinks = [
  { name: "LinkedIn", href: siteConfig.linkedin, label: "Connect on LinkedIn" },
  { name: "GitHub", href: siteConfig.github, label: "View GitHub profile" },
  { name: "Twitter", href: siteConfig.twitter, label: "Follow on Twitter" },
  { name: "WhatsApp", href: siteConfig.whatsapp, label: "Chat on WhatsApp" },
  { name: "Email", href: `mailto:${siteConfig.email}`, label: "Send an email" },
];
