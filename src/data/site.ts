export const siteConfig = {
  name: "Aura",
  fullName: "Aura Consulting",
  description:
    "Aura Consulting connects vetted international workers with Albanian employers. Browse the roster, request introductions, hire with confidence.",
  email: "hello@auraconsulting.al",
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

export const stats: { value: number; suffix?: string; label: string }[] = [
  { value: 240, suffix: "+", label: "Candidates available" },
  { value: 18, label: "Countries represented" },
  { value: 12, label: "Sectors served" },
  { value: 6, suffix: "wks", label: "Average placement" },
];

export const manifestoBlocks = [
  {
    number: "01",
    title: "Real people, vetted in person.",
    body: "Every candidate completes a video interview with our team in Tiranë before they ever appear on the roster.",
  },
  {
    number: "02",
    title: "Paperwork, dissolved.",
    body: "Visas, residency permits, travel logistics, housing. We absorb the bureaucracy so you can focus on the hire.",
  },
  {
    number: "03",
    title: "A roster, not a database.",
    body: "We choose quality over volume. Eighty profiles you'd actually meet — not eight thousand you'd never read.",
  },
];

export const faqs = [
  {
    q: "How long does placement take?",
    a: "From shortlist to arrival in Tiranë, the average is six weeks. Time-sensitive seasonal roles can move faster — we've placed kitchen staff in under three weeks for the summer season.",
  },
  {
    q: "What does Aura charge?",
    a: "A flat per-placement fee for employers, scoped to the seniority of the role. Candidates pay nothing, ever. Pricing is on the call we'll book after you submit the contact form.",
  },
  {
    q: "How are candidates vetted?",
    a: "Background checks against home-country records, language assessment scored against CEFR levels, a 45-minute video interview with an Aura recruiter, and reference calls with prior employers when applicable.",
  },
  {
    q: "What happens with visas and housing?",
    a: "We file the work permit and residency paperwork with MSHMS, arrange travel, and either place candidates in our partner housing in Tiranë or coordinate with your accommodation. You receive a single invoice — no surprises.",
  },
  {
    q: "Can I interview candidates before committing?",
    a: "Yes. Once you shortlist profiles, we arrange video interviews on your schedule, with translation if needed. There's no commitment until you've met and approved each hire.",
  },
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
