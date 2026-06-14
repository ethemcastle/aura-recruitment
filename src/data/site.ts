export const siteConfig = {
  name: "Aura",
  fullName: "Aura Recruitment",
  description:
    "Aura connects vetted international workers with Albanian employers. Browse the roster, request introductions, hire with confidence.",
  email: "hello@aura-recruitment.al",
  phone: "+355 68 200 0000",
  address: {
    line1: "Rr. Ibrahim Rugova",
    line2: "Tiranë 1001, Albania",
  },
  hours: "Mon – Fri · 09:00 – 18:00",
  license: "Licensed by MSHMS",
  socials: {
    linkedin: "#",
    instagram: "#",
  },
};

export const navLinks = [
  { label: "Process", href: "/#process" },
  { label: "Roster", href: "/roster" },
  { label: "Sectors", href: "/#sectors" },
];

export const stats = [
  { value: "240", suffix: "+", label: "Candidates available" },
  { value: "18", label: "Countries represented" },
  { value: "12", label: "Sectors served" },
  { value: "6", suffix: "wks", label: "Average placement" },
];

export const processSteps = [
  {
    numeral: "I.",
    title: "Browse the roster",
    body: "Explore our living catalogue of pre-vetted candidates. Each profile shows verified experience, language ability, and earliest availability date.",
  },
  {
    numeral: "II.",
    title: "Request introductions",
    body: "Shortlist the candidates that interest you. We arrange video interviews — at your office, in your language, on your schedule.",
  },
  {
    numeral: "III.",
    title: "Welcome them",
    body: "Once you select someone, we manage visa paperwork, travel, housing, and onboarding. They arrive in Tiranë ready to start.",
  },
];

export const sectors: { label: string; italic?: boolean }[] = [
  { label: "Hospitality" },
  { label: "Construction", italic: true },
  { label: "Care" },
  { label: "Manufacturing" },
  { label: "Agriculture", italic: true },
  { label: "Retail" },
  { label: "Logistics" },
  { label: "Domestic", italic: true },
  { label: "Skilled trades" },
  { label: "Food & beverage", italic: true },
  { label: "Cleaning services" },
  { label: "Security", italic: true },
];

export const industries = [
  "Hospitality",
  "Construction",
  "Care & healthcare",
  "Manufacturing",
  "Agriculture",
  "Retail",
  "Logistics",
  "Other",
];

export const rosterFilters: { value: string; label: string }[] = [
  { value: "all", label: "All sectors" },
  { value: "hospitality", label: "Hospitality" },
  { value: "construction", label: "Construction" },
  { value: "care", label: "Care" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "trades", label: "Skilled trades" },
];
