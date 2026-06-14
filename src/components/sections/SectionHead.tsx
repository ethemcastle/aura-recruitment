export function SectionHead({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede: React.ReactNode;
}) {
  return (
    <div className="mb-[clamp(56px,10vh,96px)] grid grid-cols-2 items-end gap-12 max-[720px]:grid-cols-1 max-[720px]:gap-6">
      <div>
        <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3 before:h-px before:w-7 before:bg-ink-4 before:content-['']">
          {eyebrow}
        </div>
        <h2 className="max-w-[720px] font-display text-[clamp(40px,6vw,88px)] font-normal leading-[0.96] tracking-[-0.02em] [&_em]:italic [&_em]:text-accent">
          {title}
        </h2>
      </div>
      <p className="max-w-[440px] text-[clamp(15px,1.3vw,17px)] leading-[1.55] text-ink-2">
        {lede}
      </p>
    </div>
  );
}
