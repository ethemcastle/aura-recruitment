"use client";

import { useEffect, useState } from "react";
import type { Candidate } from "@/types/candidate";

export function HeroFeatured({ candidates }: { candidates: Candidate[] }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (candidates.length < 2) return;
    const id = setInterval(
      () => setIdx((i) => (i + 1) % candidates.length),
      5500,
    );
    return () => clearInterval(id);
  }, [candidates.length]);

  if (candidates.length === 0) return null;
  const c = candidates[idx];

  return (
    <div
      className="relative opacity-0"
      style={{ animation: "aura-fade-in 0.9s var(--ease-aura) 1.4s forwards" }}
    >
      <div className="absolute -top-6 left-0 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3 before:h-px before:w-7 before:bg-ink-4 before:content-['']">
        Featured this week
      </div>

      <article
        className="relative overflow-hidden rounded-[6px] border border-accent/40 bg-white px-[22px] pt-[22px] pb-[26px]"
        style={{
          boxShadow:
            "0 30px 80px -40px rgba(17,37,62,0.20), 0 10px 28px -14px rgba(177,134,79,0.32)",
        }}
      >
        {/* Gold accent ribbon along the top edge */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[3px]"
          style={{
            background:
              "linear-gradient(90deg, #d4a674 0%, #b1864f 50%, #d4a674 100%)",
          }}
        />
        <header className="mb-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
          <span>N. {c.ref}</span>
          <span>{c.countryCode}</span>
        </header>

        <div
          className="relative mb-6 flex aspect-[1/1.05] items-center justify-center overflow-hidden border border-line"
          style={{
            background: "#ffffff",
          }}
        >
          <span
            className="absolute top-3 right-3 flex size-[22px] items-center justify-center rounded-full text-[11px] text-accent"
            style={{ background: "rgba(201,163,120,0.12)" }}
          >
            ✓
          </span>
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 30% 25%, rgba(201,163,120,0.08) 0%, transparent 60%)",
            }}
          />
          {c.photoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={c.ref}
              src={c.photoUrl}
              alt={c.name}
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                animation: "aura-fade-in 0.6s var(--ease-aura) forwards",
                opacity: 0,
              }}
            />
          ) : (
            <span
              key={c.ref}
              className="font-display text-[clamp(112px,14vw,160px)] italic font-normal leading-none tracking-[-0.03em] text-ink"
              style={{
                animation: "aura-fade-in 0.6s var(--ease-aura) forwards",
                opacity: 0,
              }}
            >
              {c.initial}
            </span>
          )}
        </div>

        <h3
          key={`name-${c.ref}`}
          className="mb-1 font-display text-[26px] font-normal leading-[1.1] tracking-[-0.015em]"
        >
          {c.name}
        </h3>
        <p className="mb-[18px] text-[13px] leading-[1.4] text-ink-2">
          {c.role}
        </p>
        <div className="flex items-center justify-between border-t border-line pt-3.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
          <span>{c.experience}</span>
          <span>{c.languages}</span>
        </div>
      </article>

      <div className="mt-4 flex items-center gap-2">
        {candidates.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIdx(i)}
            aria-label={`Featured candidate ${i + 1} of ${candidates.length}`}
            aria-current={i === idx}
            className={`h-px w-8 transition-colors duration-300 ${
              i === idx ? "bg-accent" : "bg-line-2 hover:bg-ink-3"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
