"use client";

import { useMemo, useState } from "react";
import type { Candidate, Category } from "@/types/candidate";
import { useShortlist } from "@/components/shortlist/ShortlistProvider";

export function RosterGrid({
  people,
  categories,
  showMeta = true,
  showFilters = true,
}: {
  people: Candidate[];
  categories: Category[];
  showMeta?: boolean;
  showFilters?: boolean;
}) {
  const [filter, setFilter] = useState<string>("all");
  const { has, toggle } = useShortlist();

  const filtered = useMemo(() => {
    if (filter === "all") return people;
    return people.filter((p) => p.category === filter);
  }, [people, filter]);

  return (
    <div className="flex flex-col gap-8">
      {showMeta && (
        <div className="flex items-center justify-between border-b border-line pb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
          <span>Last refresh · 12 June 2026</span>
          <span>
            {people.length} active · {filtered.length} shown
          </span>
        </div>
      )}

      {showFilters && (
        <div className="flex flex-wrap gap-1" role="tablist">
          <FilterChip
            label="All sectors"
            active={filter === "all"}
            onSelect={() => setFilter("all")}
          />
          {categories.map((c) => (
            <FilterChip
              key={c.slug}
              label={c.label}
              active={filter === c.slug}
              onSelect={() => setFilter(c.slug)}
            />
          ))}
        </div>
      )}

      <div className="grid grid-cols-4 gap-px border border-line bg-line max-[1080px]:grid-cols-3 max-[800px]:grid-cols-2 max-[520px]:grid-cols-1">
        {filtered.map((c, i) => {
          const shortlisted = has(c.ref);
          return (
            <article
              key={c.ref}
              className={`reveal relative flex cursor-pointer flex-col px-[22px] pt-[22px] pb-[26px] transition-colors duration-400 ${
                shortlisted ? "bg-bg-card-hover" : "bg-bg-card hover:bg-bg-card-hover"
              }`}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              {shortlisted && (
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 border border-accent"
                />
              )}

              <header className="mb-7 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
                <span>N. {c.ref}</span>
                <span>{c.countryCode}</span>
              </header>

              <div
                className="group relative mb-6 flex aspect-[1/1.05] items-center justify-center overflow-hidden border border-line"
                style={{
                  background:
                    "linear-gradient(135deg, #1F1D19 0%, #181612 100%)",
                }}
              >
                <span
                  className="absolute top-3 right-3 flex size-[22px] items-center justify-center rounded-full text-[11px] text-accent"
                  style={{ background: "rgba(201,168,118,0.12)" }}
                  title="Verified"
                >
                  ✓
                </span>
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 25%, rgba(201,168,118,0.06) 0%, transparent 60%)",
                  }}
                />
                {c.photoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={c.photoUrl}
                    alt={c.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <span className="font-display text-[clamp(96px,14vw,144px)] italic font-normal leading-none tracking-[-0.03em] transition-all duration-500 group-hover:scale-[1.03] group-hover:text-accent">
                    {c.initial}
                  </span>
                )}
              </div>

              <h3 className="mb-1 font-display text-[22px] font-normal leading-[1.15] tracking-[-0.01em]">
                {c.name}
              </h3>
              <p className="mb-[18px] text-[13px] leading-[1.4] text-ink-2">
                {c.role}
              </p>

              <div className="mb-[18px] flex items-center justify-between border-t border-line pt-3.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
                <span>{c.experience}</span>
                <span>{c.languages}</span>
              </div>

              <button
                type="button"
                onClick={() => toggle(c.ref)}
                aria-pressed={shortlisted}
                className={`flex w-full items-center justify-between rounded-full border px-3.5 py-2.5 text-xs tracking-[0.005em] transition-all duration-300 ${
                  shortlisted
                    ? "border-accent bg-accent text-bg"
                    : "border-line-2 text-ink hover:border-ink hover:bg-ink hover:text-bg"
                }`}
              >
                <span>{shortlisted ? "Shortlisted" : "Add to shortlist"}</span>
                <span className="flex size-3.5 items-center justify-center rounded-full border border-current text-xs leading-none">
                  {shortlisted ? "✓" : "+"}
                </span>
              </button>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function FilterChip({
  label,
  active,
  onSelect,
}: {
  label: string;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onSelect}
      className={`rounded-full border px-4 py-2 text-xs tracking-[0.005em] transition-all duration-300 ${
        active
          ? "border-ink bg-ink text-bg"
          : "border-line bg-transparent text-ink-2 hover:border-line-2 hover:text-ink"
      }`}
    >
      {label}
    </button>
  );
}
