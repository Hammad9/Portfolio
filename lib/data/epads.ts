import {
  UserPlus,
  FileText,
  ShieldCheck,
  ClipboardCheck,
  HeadphonesIcon,
  type LucideIcon,
} from "lucide-react";

export interface EpadsService {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

export interface EpadsMistake {
  mistake: string;
  solution: string;
}

export interface EpadsBestPractice {
  title: string;
  description: string;
}

export const epadsServices: EpadsService[] = [
  {
    id: "vendor-registration",
    title: "Vendor Registration",
    description:
      "End-to-end support for creating and verifying your vendor profile on Pakistan's ePADS portal.",
    icon: UserPlus,
    details: [
      "Account creation and email verification.",
      "Company profile setup and category selection.",
      "Document upload and validation.",
      "Follow-up with authorities for approval.",
    ],
  },
  {
    id: "tender-documentation",
    title: "Tender Documentation",
    description:
      "Preparation of complete tender submission packages aligned with solicitation requirements.",
    icon: FileText,
    details: [
      "Technical proposal writing and formatting.",
      "Financial proposal and pricing schedules.",
      "Company profile and experience certificates.",
      "Bid forms and letter of acceptance.",
    ],
  },
  {
    id: "bid-security",
    title: "Bid Security Guidance",
    description:
      "Clarity on bid bonds, bank guarantees, and security instruments required for tender participation.",
    icon: ShieldCheck,
    details: [
      "Identify the correct bid security type and amount.",
      "Coordinate with banks for guarantee issuance.",
      "Verify validity periods and submission format.",
      "Avoid common disqualification pitfalls.",
    ],
  },
  {
    id: "compliance-review",
    title: "Compliance Review",
    description:
      "Thorough review of tender eligibility criteria and your submission to ensure nothing is missed.",
    icon: ClipboardCheck,
    details: [
      "Checklist against tender requirements.",
      "Eligibility and qualification verification.",
      "Document completeness and correctness.",
      "Submission deadline and format validation.",
    ],
  },
  {
    id: "procurement-support",
    title: "Procurement Support",
    description:
      "Ongoing advisory for navigating tenders, clarifications, bid openings, and post-award processes.",
    icon: HeadphonesIcon,
    details: [
      "Tender opportunity tracking and alerts.",
      "Clarification request drafting.",
      "Bid opening and evaluation support.",
      "Post-award contract compliance guidance.",
    ],
  },
];

export const epadsMistakes: EpadsMistake[] = [
  {
    mistake: "Registering under the wrong vendor category.",
    solution: "Review tender eligibility criteria before selecting categories and update profiles accordingly.",
  },
  {
    mistake: "Submitting incomplete documentation.",
    solution: "Use a compliance checklist and verify every required document before submission.",
  },
  {
    mistake: "Missing bid security validity periods.",
    solution: "Ensure bid bonds cover the full evaluation period plus any stated buffer.",
  },
  {
    mistake: "Ignoring tender clarification deadlines.",
    solution: "Track deadlines carefully and submit clarification questions well before the cutoff.",
  },
  {
    mistake: "Uploading files in incorrect formats.",
    solution: "Follow the tender's exact naming, format, and size requirements for every upload.",
  },
];

export const epadsBestPractices: EpadsBestPractice[] = [
  {
    title: "Start Registration Early",
    description: "Vendor verification can take time. Begin the process before your target tender is published.",
  },
  {
    title: "Keep Documents Updated",
    description: "Regularly update tax certificates, registration documents, and financial records.",
  },
  {
    title: "Read Tender Documents Fully",
    description: "Evaluation criteria and submission rules are detailed in the solicitation. Read every page.",
  },
  {
    title: "Maintain a Tender Calendar",
    description: "Track publication dates, pre-bid meetings, clarification deadlines, and submission cutoffs.",
  },
  {
    title: "Seek Expert Review",
    description: "A second review by a procurement consultant can catch issues before submission.",
  },
];
