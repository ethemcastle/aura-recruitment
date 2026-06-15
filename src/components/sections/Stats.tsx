import { stats } from "@/data/site";
import { AnimatedCounter } from "@/components/sections/AnimatedCounter";

export function Stats() {
  return (
    <section className="border-b border-line py-[clamp(48px,8vh,96px)]">
      <div className="wrap">
        <dl className="grid grid-cols-4 gap-0 max-[720px]:grid-cols-2 max-[720px]:gap-y-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal px-6 first:pl-0 first:border-l-0 border-l border-line max-[720px]:[&:nth-child(3)]:border-l-0 max-[720px]:[&:nth-child(3)]:pl-0`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span
                className="mb-4 block h-px w-8 bg-accent"
                aria-hidden
              />
              <dd className="mb-3 font-display text-[clamp(40px,5vw,64px)] font-normal leading-none tracking-[-0.02em] tabular-nums">
                <AnimatedCounter value={stat.value} />
                {stat.suffix === "+" && (
                  <span className="text-accent">+</span>
                )}
                {stat.suffix === "wks" && (
                  <span className="ml-1 text-[0.6em] text-ink-3">wks</span>
                )}
              </dd>
              <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
