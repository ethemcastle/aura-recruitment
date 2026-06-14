export function PullQuote() {
  return (
    <section className="border-b border-line py-[clamp(80px,16vh,180px)]">
      <div className="wrap">
        <blockquote className="reveal mb-12 max-w-[1000px] font-display text-[clamp(28px,4vw,52px)] font-normal leading-[1.15] tracking-[-0.015em] text-ink">
          <span className="mr-2 align-[-0.1em] font-display text-[64px] italic leading-none text-accent">
            &ldquo;
          </span>
          We needed kitchen staff for the summer season. Aura had three
          candidates ready to{" "}
          <em className="italic text-accent">interview within a week.</em> By
          July they were on the line. Two are returning for the second season.
        </blockquote>
        <div className="reveal flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-ink-3 before:h-px before:w-7 before:bg-ink-4 before:content-['']">
          Owner · Hotel Group · Vlorë
        </div>
      </div>
    </section>
  );
}
