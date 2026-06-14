import type { Job } from "@/types/job";

/**
 * Mock job listings.
 *
 * This module is the single source of truth for job data. The async helper
 * functions below intentionally mirror what a real data source (headless CMS,
 * database, or REST/GraphQL API) would expose, so the UI can stay unchanged
 * when the data layer is swapped out later.
 */
export const jobs: Job[] = [
  {
    id: "1",
    slug: "senior-frontend-engineer",
    title: "Senior Frontend Engineer",
    company: "Nebula Labs",
    department: "Engineering",
    location: "San Francisco, CA",
    remote: true,
    type: "Full-time",
    experienceLevel: "Senior",
    salaryMin: 150000,
    salaryMax: 195000,
    currency: "USD",
    summary:
      "Craft delightful, accessible interfaces for a next-generation analytics platform used by thousands of teams.",
    description:
      "We're looking for a Senior Frontend Engineer to lead the development of our customer-facing product. You'll work closely with design and product to ship polished, performant experiences using React and TypeScript, and help set the technical direction for the frontend team.",
    responsibilities: [
      "Build and maintain core product features with React, TypeScript, and Next.js",
      "Partner with designers to translate Figma prototypes into pixel-perfect UI",
      "Champion accessibility, performance, and testing best practices",
      "Mentor engineers through code review and pairing",
    ],
    requirements: [
      "5+ years building production web applications",
      "Deep expertise in React, TypeScript, and modern CSS",
      "Experience with design systems and component libraries",
      "A strong eye for detail and user experience",
    ],
    benefits: [
      "Equity package",
      "Unlimited PTO",
      "Home office stipend",
      "Annual learning budget",
    ],
    tags: ["React", "TypeScript", "Next.js", "Design Systems"],
    postedAt: "2026-06-08",
    featured: true,
  },
  {
    id: "2",
    slug: "product-designer",
    title: "Product Designer",
    company: "Lumen",
    department: "Design",
    location: "New York, NY",
    remote: true,
    type: "Full-time",
    experienceLevel: "Mid",
    salaryMin: 120000,
    salaryMax: 155000,
    currency: "USD",
    summary:
      "Own end-to-end design for flagship features, from research and wireframes through to polished, shipped UI.",
    description:
      "As a Product Designer you'll shape the experience of a product loved by millions. You'll lead discovery, prototype rapidly, and collaborate with engineering to bring ideas to life while raising the quality bar across the team.",
    responsibilities: [
      "Lead design for major product initiatives end to end",
      "Conduct user research and synthesize insights into clear direction",
      "Create wireframes, prototypes, and high-fidelity designs",
      "Contribute to and evolve our design system",
    ],
    requirements: [
      "3+ years of product design experience",
      "A portfolio demonstrating strong interaction and visual design",
      "Fluency in Figma and modern prototyping tools",
      "Excellent communication and storytelling skills",
    ],
    benefits: [
      "Equity package",
      "Flexible hours",
      "Wellness stipend",
      "Top-tier hardware",
    ],
    tags: ["Figma", "UX Research", "Prototyping", "Design Systems"],
    postedAt: "2026-06-10",
    featured: true,
  },
  {
    id: "3",
    slug: "backend-engineer-platform",
    title: "Backend Engineer, Platform",
    company: "Nebula Labs",
    department: "Engineering",
    location: "Remote (US)",
    remote: true,
    type: "Full-time",
    experienceLevel: "Mid",
    salaryMin: 140000,
    salaryMax: 180000,
    currency: "USD",
    summary:
      "Design and scale the services and APIs that power our real-time data platform.",
    description:
      "Join our Platform team to build the backbone of our product. You'll design resilient services, optimize data pipelines, and ensure our infrastructure scales gracefully as we grow.",
    responsibilities: [
      "Design, build, and operate scalable backend services",
      "Own APIs consumed by web, mobile, and partner integrations",
      "Improve observability, reliability, and performance",
      "Collaborate across teams on architecture decisions",
    ],
    requirements: [
      "4+ years of backend engineering experience",
      "Proficiency with Node.js, Go, or similar",
      "Experience with distributed systems and databases",
      "Familiarity with cloud infrastructure (AWS/GCP)",
    ],
    benefits: [
      "Equity package",
      "Remote-first",
      "401(k) matching",
      "Conference budget",
    ],
    tags: ["Node.js", "Go", "PostgreSQL", "AWS"],
    postedAt: "2026-06-05",
    featured: false,
  },
  {
    id: "4",
    slug: "growth-marketing-manager",
    title: "Growth Marketing Manager",
    company: "Lumen",
    department: "Marketing",
    location: "Austin, TX",
    remote: false,
    type: "Full-time",
    experienceLevel: "Senior",
    salaryMin: 110000,
    salaryMax: 140000,
    currency: "USD",
    summary:
      "Drive acquisition and retention through data-informed, full-funnel marketing campaigns.",
    description:
      "We're hiring a Growth Marketing Manager to own our acquisition strategy. You'll run experiments across channels, analyze performance, and partner with product to drive sustainable growth.",
    responsibilities: [
      "Plan and execute multi-channel growth campaigns",
      "Own performance metrics and reporting",
      "Run rapid experiments and iterate on results",
      "Collaborate with content, product, and sales teams",
    ],
    requirements: [
      "5+ years in growth or performance marketing",
      "Hands-on experience with paid and lifecycle channels",
      "Strong analytical skills and comfort with data",
      "Track record of measurable growth",
    ],
    benefits: [
      "Performance bonus",
      "Hybrid schedule",
      "Health & dental",
      "Gym membership",
    ],
    tags: ["SEO", "Paid Ads", "Lifecycle", "Analytics"],
    postedAt: "2026-06-01",
    featured: false,
  },
  {
    id: "5",
    slug: "data-scientist",
    title: "Data Scientist",
    company: "Aperture",
    department: "Data",
    location: "Seattle, WA",
    remote: true,
    type: "Full-time",
    experienceLevel: "Mid",
    salaryMin: 135000,
    salaryMax: 175000,
    currency: "USD",
    summary:
      "Turn raw data into insights and models that shape product and business strategy.",
    description:
      "As a Data Scientist, you'll partner with product and engineering to uncover insights, build predictive models, and inform decisions across the company.",
    responsibilities: [
      "Build models and analyses that drive product decisions",
      "Design and evaluate experiments (A/B testing)",
      "Communicate findings to technical and non-technical audiences",
      "Develop dashboards and self-serve analytics",
    ],
    requirements: [
      "3+ years in data science or analytics",
      "Strong Python and SQL skills",
      "Experience with statistical modeling and ML",
      "Ability to communicate complex ideas clearly",
    ],
    benefits: [
      "Equity package",
      "Remote-first",
      "Learning budget",
      "Flexible PTO",
    ],
    tags: ["Python", "SQL", "Machine Learning", "Experimentation"],
    postedAt: "2026-05-28",
    featured: true,
  },
  {
    id: "6",
    slug: "product-manager",
    title: "Product Manager",
    company: "Aperture",
    department: "Product",
    location: "Remote (Global)",
    remote: true,
    type: "Full-time",
    experienceLevel: "Senior",
    salaryMin: 145000,
    salaryMax: 185000,
    currency: "USD",
    summary:
      "Define the roadmap and lead cross-functional teams to ship products customers love.",
    description:
      "We're looking for a Product Manager to own a core area of our product. You'll set vision, prioritize ruthlessly, and partner with design and engineering to deliver impact.",
    responsibilities: [
      "Define product strategy and roadmap",
      "Translate customer needs into clear requirements",
      "Lead cross-functional teams from discovery to launch",
      "Measure outcomes and iterate",
    ],
    requirements: [
      "5+ years of product management experience",
      "Track record of shipping successful products",
      "Strong analytical and communication skills",
      "Experience with B2B SaaS preferred",
    ],
    benefits: [
      "Equity package",
      "Work from anywhere",
      "Annual offsite",
      "Health coverage",
    ],
    tags: ["Roadmapping", "B2B SaaS", "Discovery", "Analytics"],
    postedAt: "2026-06-11",
    featured: false,
  },
  {
    id: "7",
    slug: "account-executive",
    title: "Account Executive",
    company: "Lumen",
    department: "Sales",
    location: "Chicago, IL",
    remote: false,
    type: "Full-time",
    experienceLevel: "Mid",
    salaryMin: 90000,
    salaryMax: 130000,
    currency: "USD",
    summary:
      "Own the full sales cycle and help growing teams discover the value of our platform.",
    description:
      "As an Account Executive, you'll build relationships with prospective customers, run compelling demos, and close deals that fuel our growth.",
    responsibilities: [
      "Manage the full sales cycle from prospecting to close",
      "Run discovery calls and product demos",
      "Build and maintain a healthy pipeline",
      "Collaborate with marketing and customer success",
    ],
    requirements: [
      "3+ years of B2B sales experience",
      "Track record of hitting or exceeding quota",
      "Excellent communication and negotiation skills",
      "Self-motivated and resilient",
    ],
    benefits: [
      "Uncapped commission",
      "Health & dental",
      "Career growth",
      "Team trips",
    ],
    tags: ["B2B Sales", "SaaS", "Pipeline", "Negotiation"],
    postedAt: "2026-05-30",
    featured: false,
  },
  {
    id: "8",
    slug: "devops-engineer",
    title: "DevOps Engineer",
    company: "Nebula Labs",
    department: "Engineering",
    location: "Remote (EU)",
    remote: true,
    type: "Contract",
    experienceLevel: "Senior",
    salaryMin: 120000,
    salaryMax: 160000,
    currency: "USD",
    summary:
      "Automate, secure, and scale the infrastructure that keeps our platform running 24/7.",
    description:
      "We're seeking a DevOps Engineer to strengthen our infrastructure and developer experience. You'll own CI/CD, observability, and cloud cost optimization.",
    responsibilities: [
      "Build and maintain CI/CD pipelines",
      "Manage infrastructure as code (Terraform)",
      "Improve monitoring, alerting, and incident response",
      "Optimize cloud costs and security posture",
    ],
    requirements: [
      "4+ years in DevOps or SRE roles",
      "Expertise with Kubernetes and Terraform",
      "Experience with AWS or GCP",
      "Strong scripting skills",
    ],
    benefits: [
      "Flexible contract",
      "Remote-first",
      "Latest tooling",
      "Async culture",
    ],
    tags: ["Kubernetes", "Terraform", "CI/CD", "AWS"],
    postedAt: "2026-06-03",
    featured: false,
  },
  {
    id: "9",
    slug: "ux-research-intern",
    title: "UX Research Intern",
    company: "Aperture",
    department: "Design",
    location: "Boston, MA",
    remote: false,
    type: "Internship",
    experienceLevel: "Entry",
    salaryMin: 45000,
    salaryMax: 60000,
    currency: "USD",
    summary:
      "Support the research team in uncovering insights that shape product direction.",
    description:
      "This internship is a hands-on opportunity to learn UX research in a fast-moving product team. You'll help plan studies, run sessions, and synthesize findings.",
    responsibilities: [
      "Assist in planning and running user research sessions",
      "Recruit and schedule participants",
      "Help analyze qualitative and quantitative data",
      "Share insights with the broader team",
    ],
    requirements: [
      "Currently pursuing a degree in HCI, psychology, or related",
      "Curiosity and strong communication skills",
      "Basic familiarity with research methods",
      "Detail-oriented and organized",
    ],
    benefits: [
      "Mentorship",
      "Paid internship",
      "Real impact",
      "Possible full-time offer",
    ],
    tags: ["UX Research", "Interviews", "Synthesis"],
    postedAt: "2026-06-12",
    featured: false,
  },
  {
    id: "10",
    slug: "operations-lead",
    title: "Operations Lead",
    company: "Lumen",
    department: "Operations",
    location: "Denver, CO",
    remote: true,
    type: "Full-time",
    experienceLevel: "Lead",
    salaryMin: 130000,
    salaryMax: 165000,
    currency: "USD",
    summary:
      "Build the systems and processes that let a fast-growing company scale smoothly.",
    description:
      "As Operations Lead, you'll design and run the operational backbone of the company—streamlining processes, managing vendors, and enabling teams to do their best work.",
    responsibilities: [
      "Design and improve company-wide processes",
      "Own vendor and tooling relationships",
      "Partner with finance and people teams",
      "Lead cross-functional operational projects",
    ],
    requirements: [
      "6+ years in operations or business roles",
      "Experience scaling processes at a growing company",
      "Strong project management skills",
      "Analytical and systems-thinking mindset",
    ],
    benefits: [
      "Equity package",
      "Remote-friendly",
      "Health coverage",
      "Professional development",
    ],
    tags: ["Operations", "Process", "Project Management"],
    postedAt: "2026-05-25",
    featured: false,
  },
];

/** Get all jobs, most recently posted first. */
export async function getAllJobs(): Promise<Job[]> {
  return [...jobs].sort(
    (a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime(),
  );
}

/** Get a single job by its slug, or undefined if not found. */
export async function getJobBySlug(slug: string): Promise<Job | undefined> {
  return jobs.find((job) => job.slug === slug);
}

/** Get the jobs flagged as featured. */
export async function getFeaturedJobs(): Promise<Job[]> {
  return jobs.filter((job) => job.featured);
}

/** Distinct departments present in the data, sorted alphabetically. */
export function getDepartments(): string[] {
  return [...new Set(jobs.map((job) => job.department))].sort();
}

/** Distinct employment types present in the data. */
export function getEmploymentTypes(): string[] {
  return [...new Set(jobs.map((job) => job.type))];
}

