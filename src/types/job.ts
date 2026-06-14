export type EmploymentType =
  | "Full-time"
  | "Part-time"
  | "Contract"
  | "Internship";

export type ExperienceLevel = "Entry" | "Mid" | "Senior" | "Lead";

export type Department =
  | "Engineering"
  | "Design"
  | "Product"
  | "Marketing"
  | "Sales"
  | "Data"
  | "Operations";

export interface Job {
  id: string;
  slug: string;
  title: string;
  company: string;
  department: Department;
  location: string;
  remote: boolean;
  type: EmploymentType;
  experienceLevel: ExperienceLevel;
  salaryMin: number;
  salaryMax: number;
  currency: string;
  summary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  tags: string[];
  postedAt: string; // ISO date
  featured: boolean;
}

