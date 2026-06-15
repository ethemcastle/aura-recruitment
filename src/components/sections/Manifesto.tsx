import { manifestoBlocks } from "@/data/site";

export function Manifesto() {
  return (
    <section className="relative overflow-hidden border-b border-line py-[clamp(80px,14vh,160px)]">
      {/* Drifting gold orb behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 size-[420px] rounded-full blur-[120px] opacity-30 animate-drift-b"
        style={{
          background:
            "radial-gradient(circle, rgba(177,134,79,0.45) 0%, transparent 70%)",
        }}
      />

      <div className="wrap relative">
        <div className="mb-12 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
          <span className="h-px w-7 bg-ink-4" />
          Our manifesto
        </div>

        <h2 className="reveal max-w-5xl font-display text-[clamp(40px,7.5vw,116px)] font-normal leading-[0.95] tracking-[-0.025em]">
          Hiring is a <em className="italic text-accent">craft</em>,
          <br />
          not a transaction.
        </h2>

        <div className="mt-20 grid gap-12 lg:grid-cols-3">
          {manifestoBlocks.map((b, i) => (
            <article
              key={b.number}
              className="reveal group relative flex flex-col gap-4 pt-7"
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-line transition-colors duration-500 group-hover:bg-accent"
              />
              <span
                aria-hidden
                className="absolute left-0 top-0 h-px w-0 bg-accent transition-[width] duration-700 group-hover:w-full"
              />
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                {b.number}
              </div>
              <h3 className="font-display text-[clamp(22px,2vw,28px)] font-normal leading-[1.15] tracking-[-0.015em]">
                {b.title}
              </h3>
              <p className="text-[15px] leading-[1.65] text-ink-2">{b.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
