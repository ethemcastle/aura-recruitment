import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Building2,
  Compass,
  Gauge,
  Handshake,
  HeartHandshake,
  LineChart,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

export const siteConfig = {
  name: "Aura Recruitment",
  shortName: "Aura",
  description:
    "Aura Recruitment connects ambitious people with companies they'll love. We're a modern talent partner for high-growth teams in tech, design, and beyond.",
  url: "https://aura-recruitment.example.com",
  email: "hello@aura-recruitment.com",
  phone: "+1 (415) 555-0192",
  address: "535 Mission St, San Francisco, CA 94105",
  socials: {
    linkedin: "https://www.linkedin.com",
    twitter: "https://x.com",
    instagram: "https://instagram.com",
  },
};

export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: "Find Jobs", href: "/jobs" },
  { label: "For Employers", href: "/services" },
  { label: "For Candidates", href: "/candidates" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "For Employers", href: "/services" },
      { label: "For Candidates", href: "/candidates" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "All Jobs", href: "/jobs" },
      { label: "Engineering", href: "/jobs?department=Engineering" },
      { label: "Design", href: "/jobs?department=Design" },
      { label: "Product", href: "/jobs?department=Product" },
    ],
  },
];

export interface Stat {
  label: string;
  value: string;
}

export const stats: Stat[] = [
  { label: "Placements made", value: "12k+" },
  { label: "Partner companies", value: "450+" },
  { label: "Avg. time to hire", value: "18 days" },
  { label: "Candidate rating", value: "4.9/5" },
];

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const employerServices: Service[] = [
  {
    title: "Executive Search",
    description:
      "Discreet, thorough searches for leadership and hard-to-fill roles, backed by a vetted network.",
    icon: Target,
  },
  {
    title: "Tech & Product Hiring",
    description:
      "Engineers, designers, and PMs—pre-screened for skill and culture so you only meet the best.",
    icon: Briefcase,
  },
  {
    title: "Embedded Recruiting",
    description:
      "Scale fast with recruiters who work as an extension of your team for as long as you need them.",
    icon: Users,
  },
  {
    title: "Talent Advisory",
    description:
      "Market insights, compensation benchmarking, and hiring strategy to help you win great people.",
    icon: LineChart,
  },
];

export interface Value {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const values: Value[] = [
  {
    title: "People first",
    description:
      "We treat candidates and clients like humans, not transactions. Relationships outlast any single role.",
    icon: HeartHandshake,
  },
  {
    title: "Radical clarity",
    description:
      "Honest feedback, transparent timelines, and no ghosting—ever. You always know where you stand.",
    icon: Compass,
  },
  {
    title: "Quality over volume",
    description:
      "We send a shortlist, not a spreadsheet. Every introduction is intentional and well matched.",
    icon: ShieldCheck,
  },
  {
    title: "Move with momentum",
    description:
      "Great talent moves fast. So do we—without ever cutting corners on the experience.",
    icon: Gauge,
  },
];

export interface Step {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const candidateSteps: Step[] = [
  {
    title: "Tell us your story",
    description:
      "Share your experience and what you're looking for. A real recruiter reviews every profile.",
    icon: Sparkles,
  },
  {
    title: "Get matched",
    description:
      "We surface roles that fit your skills, goals, and values—no spray-and-pray applications.",
    icon: Search,
  },
  {
    title: "Interview with support",
    description:
      "Prep, feedback, and advocacy at every stage. We're in your corner from intro to offer.",
    icon: Handshake,
  },
  {
    title: "Land the offer",
    description:
      "We help you negotiate confidently and start your new role on the best possible terms.",
    icon: Building2,
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Aura understood exactly what we needed and sent three candidates—we hired two. The quality was unreal.",
    name: "Maya Chen",
    role: "VP Engineering",
    company: "Nebula Labs",
  },
  {
    quote:
      "My recruiter actually cared about my goals. I landed a role with a 30% raise and a team I love.",
    name: "Daniel Osei",
    role: "Product Designer",
    company: "Lumen",
  },
  {
    quote:
      "The fastest, most transparent hiring process we've run. Aura felt like part of our own team.",
    name: "Priya Nair",
    role: "Head of Talent",
    company: "Aperture",
  },
];

export const trustedBy: string[] = [
  "Nebula Labs",
  "Lumen",
  "Aperture",
  "Northwind",
  "Vertex",
  "Halcyon",
];

