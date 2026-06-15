"use client";

import { useActionState, useEffect } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { industries, siteConfig } from "@/data/site";
import { useShortlist } from "@/components/shortlist/ShortlistProvider";
import { SectionHead } from "@/components/sections/SectionHead";

const initialState: ContactState = { status: "idle", message: "" };

const fieldShellClass =
  "flex flex-col border-b border-line py-[18px] relative";

const inputClass =
  "bg-transparent border-0 outline-none text-base text-ink py-1 font-sans placeholder:text-ink-4";

export function Contact() {
  const { refs, count, clear } = useShortlist();
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );

  useEffect(() => {
    if (state.status === "success") {
      clear();
    }
  }, [state.status, clear]);

  return (
    <section id="contact" className="py-[clamp(80px,14vh,160px)]">
      <div className="wrap">
        <SectionHead
          eyebrow="Request introductions"
          title={
            <>
              Tell us who you <em>need.</em>
            </>
          }
          lede={
            <>
              Fill in the form and we&apos;ll arrange a call within two
              working days. If you&apos;ve shortlisted candidates above,
              their reference numbers will be included automatically.
            </>
          }
        />

        <div className="grid items-start gap-20 lg:grid-cols-[1fr_1.2fr] max-[880px]:gap-12">
          <aside className="text-sm leading-[1.6] text-ink-2">
            <ContactBlock label="Write to us">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-base text-ink hover:text-accent"
              >
                {siteConfig.email}
              </a>
            </ContactBlock>
            <ContactBlock label="Call us">
              <a
                href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                className="text-base text-ink hover:text-accent"
              >
                {siteConfig.phone}
              </a>
            </ContactBlock>
            <ContactBlock label="Visit">
              <span className="text-base text-ink">
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
              </span>
            </ContactBlock>
            <ContactBlock label="Hours">
              <span className="text-base text-ink">
                {siteConfig.hours}
                <br />
                <span className="text-ink-3">Calls returned within 24h</span>
              </span>
            </ContactBlock>
          </aside>

          <form action={formAction} className="grid gap-0" noValidate>
            <Field label="Company name" htmlFor="company">
              <input
                id="company"
                name="company"
                type="text"
                placeholder="e.g. Hotel Adriatik"
                className={inputClass}
                aria-invalid={Boolean(state.errors?.company)}
                required
              />
              {state.errors?.company && (
                <FieldError>{state.errors.company}</FieldError>
              )}
            </Field>

            <Field label="Industry" htmlFor="industry">
              <select
                id="industry"
                name="industry"
                defaultValue=""
                aria-invalid={Boolean(state.errors?.industry)}
                className={`${inputClass} cursor-pointer appearance-none pr-6 bg-no-repeat`}
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'><path d='M3 5l3 3 3-3' stroke='%23767168' stroke-width='1' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
                  backgroundPosition: "right center",
                }}
                required
              >
                <option value="" className="bg-bg-elev text-ink">
                  Select your sector
                </option>
                {industries.map((opt) => (
                  <option key={opt} value={opt} className="bg-bg-elev text-ink">
                    {opt}
                  </option>
                ))}
              </select>
              {state.errors?.industry && (
                <FieldError>{state.errors.industry}</FieldError>
              )}
            </Field>

            <Field
              label="Position you&apos;re hiring for"
              htmlFor="position"
            >
              <input
                id="position"
                name="position"
                type="text"
                placeholder="e.g. Line cook, 2 positions"
                className={inputClass}
              />
            </Field>

            <Field label="Your email" htmlFor="email">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.al"
                className={inputClass}
                aria-invalid={Boolean(state.errors?.email)}
                required
              />
              {state.errors?.email && (
                <FieldError>{state.errors.email}</FieldError>
              )}
            </Field>

            <div className={fieldShellClass}>
              <div className="mb-2 flex justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
                <span>Shortlisted candidates</span>
                <span
                  className={count > 0 ? "text-accent" : "text-ink-3"}
                  aria-live="polite"
                >
                  {count > 0
                    ? `${count} selected — ${refs
                        .map((r) => `N. ${r}`)
                        .join(" · ")}`
                    : "None selected — browse the roster"}
                </span>
              </div>
              <input type="hidden" name="shortlist" value={refs.join(",")} />
            </div>

            <Field label="Additional notes" htmlFor="notes">
              <textarea
                id="notes"
                name="notes"
                rows={3}
                placeholder="Timeline, language requirements, anything else we should know"
                className={`${inputClass} min-h-[60px] resize-y`}
              />
            </Field>

            {state.status === "error" && !state.errors && (
              <p className="mt-4 text-sm text-accent-dim" aria-live="polite">
                {state.message}
              </p>
            )}

            <button
              type="submit"
              disabled={pending}
              className="group mt-8 inline-flex items-center gap-2.5 self-start rounded-full border border-transparent bg-ink px-[26px] py-4 text-sm font-medium text-bg transition-all duration-300 hover:-translate-y-px hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
            >
              {pending ? "Sending…" : "Send request"}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            {state.status === "success" && (
              <div
                className="mt-6 rounded-[4px] border border-accent-dim px-[22px] py-[18px] text-sm text-ink"
                style={{ background: "rgba(201,163,120,0.08)" }}
                role="status"
              >
                <strong className="font-medium text-accent">
                  Request received.
                </strong>{" "}
                {state.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className={fieldShellClass}>
      <label
        htmlFor={htmlFor}
        className="mb-2 flex justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function ContactBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <div className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
        {label}
      </div>
      <div>{children}</div>
    </div>
  );
}

function FieldError({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-2 text-xs text-accent-dim" aria-live="polite">
      {children}
    </p>
  );
}
