"use server";

type FieldKey = "company" | "industry" | "position" | "email" | "notes";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<FieldKey, string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const company = String(formData.get("company") ?? "").trim();
  const industry = String(formData.get("industry") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const shortlist = String(formData.get("shortlist") ?? "")
    .split(",")
    .map((r) => r.trim())
    .filter(Boolean);

  const errors: ContactState["errors"] = {};
  if (company.length < 2) errors.company = "Please enter your company name.";
  if (!industry) errors.industry = "Please pick a sector.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      errors,
    };
  }

  // In a real app, this is where we'd push to a CRM, send an email,
  // or persist the request. Simulate a brief round-trip so the pending
  // state is visible in the UI.
  await new Promise((resolve) => setTimeout(resolve, 600));

  const refSummary =
    shortlist.length > 0
      ? ` We've attached the ${shortlist.length} reference${
          shortlist.length === 1 ? "" : "s"
        } you shortlisted (${shortlist.map((r) => `N. ${r}`).join(", ")}).`
      : "";

  return {
    status: "success",
    message: `We'll be in touch within two working days with candidate introductions tailored to your needs.${refSummary}`,
  };
}
