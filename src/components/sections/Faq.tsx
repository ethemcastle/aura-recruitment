"use client";

import { useState } from "react";
import { faqs } from "@/data/site";
import { SectionHead } from "@/components/sections/SectionHead";

export function Faq() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden border-b border-line py-[clamp(80px,14vh,160px)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/4 size-[420px] rounded-full blur-[140px] opacity-25 animate-drift-c"
        style={{
          background:
            "radial-gradient(circle, rgba(212,166,116,0.45) 0%, transparent 70%)",
        }}
      />

      <div className="wrap relative">
        <SectionHead
          eyebrow="Common questions"
          title={
            <>
              How it works, <em>in detail.</em>
            </>
          }
          lede={
            <>
              Specific answers to the questions employers ask most. If
              something isn&apos;t covered, the contact form sits a section
              below.
            </>
          }
        />

        <div className="mx-auto mt-16 flex max-w-3xl flex-col">
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.q}
              index={i}
              question={faq.q}
              answer={faq.a}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({
  index,
  question,
  answer,
}: {
  index: number;
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-line first:border-t">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <div className="flex items-baseline gap-5">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-[clamp(20px,2vw,26px)] tracking-[-0.015em] text-ink transition-colors group-hover:text-accent">
            {question}
          </span>
        </div>
        <span
          aria-hidden
          className={`relative inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-line-2 text-ink transition-all duration-500 ${
            open
              ? "rotate-45 border-accent bg-accent text-white"
              : "group-hover:border-accent group-hover:text-accent"
          }`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 1v10M1 6h10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-7 pl-[78px] pr-12 text-[15px] leading-[1.7] text-ink-2">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
