export interface Category {
  /** URL-safe identifier, e.g. "hospitality". */
  slug: string;
  /** Human-readable label, e.g. "Hospitality". */
  label: string;
}

export interface Candidate {
  /** Roster reference, e.g. "047". */
  ref: string;
  /** ISO 3166-1 alpha-2 country code of origin. */
  countryCode: string;
  /** Display label for country. */
  country: string;
  /** First initial used in the monogram portrait. */
  initial: string;
  name: string;
  role: string;
  experience: string;
  languages: string;
  /** Category slug — see {@link Category}. */
  category: string;
  /** Optional public path to the candidate's photo, e.g. /uploads/048-abc.jpg. */
  photoUrl?: string;
}

export const defaultCategories: Category[] = [
  { slug: "hospitality", label: "Hospitality" },
  { slug: "construction", label: "Construction" },
  { slug: "care", label: "Care" },
  { slug: "manufacturing", label: "Manufacturing" },
  { slug: "trades", label: "Skilled trades" },
  { slug: "agriculture", label: "Agriculture" },
  { slug: "logistics", label: "Logistics" },
];
