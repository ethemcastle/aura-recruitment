import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes conditionally while resolving conflicts.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a salary range into a compact, human-readable string.
 */
export function formatSalary(
  min: number,
  max: number,
  currency: string = "USD",
) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
    notation: "compact",
  });

  return `${formatter.format(min)} – ${formatter.format(max)}`;
}

/**
 * Return a "x days/weeks ago" style relative time string from an ISO date.
 */
export function formatRelativeDate(isoDate: string) {
  const date = new Date(isoDate);
  const diffMs = Date.now() - date.getTime();
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) {
    const weeks = Math.round(diffDays / 7);
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  }
  const months = Math.round(diffDays / 30);
  return `${months} month${months > 1 ? "s" : ""} ago`;
}

