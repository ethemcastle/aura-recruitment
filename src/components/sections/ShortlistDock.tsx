"use client";

import { useShortlist } from "@/components/shortlist/ShortlistProvider";

export function ShortlistDock() {
  const { count } = useShortlist();
  const active = count > 0;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 left-1/2 z-40 flex items-center gap-[18px] rounded-full bg-ink py-3 pr-3.5 pl-[22px] text-bg shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)] transition-transform duration-500 ${
        active
          ? "-translate-x-1/2 translate-y-0"
          : "-translate-x-1/2 translate-y-[120px]"
      }`}
    >
      <div className="font-mono text-[13px] tracking-[0.08em]">
        <strong className="font-medium">{count}</strong> candidates
        shortlisted
      </div>
      <div className="h-4 w-px bg-bg/20" />
      <a
        href="#contact"
        className="inline-flex items-center gap-2 rounded-full bg-bg px-[18px] py-2.5 text-[13px] font-medium text-ink transition-colors duration-300 hover:bg-bg-card-hover"
      >
        Request introductions
        <span>→</span>
      </a>
    </div>
  );
}
