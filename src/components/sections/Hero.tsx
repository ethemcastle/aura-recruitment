import Link from "next/link";
import { rosterCountries } from "@/data/candidates";
import { listPeople } from "@/lib/store";
import { HeroFeatured } from "@/components/sections/HeroFeatured";

function Word({
  delay,
  children,
}: {
  delay: string;
  children: React.ReactNode;
}) {
  return (
    <span className="word">
      <span className="word__inner" style={{ animationDelay: delay }}>
        {children}
      </span>
    </span>
  );
}

export async function Hero() {
  const all = await listPeople();
  const featured = all.slice(0, 4);
  const marqueeItems = [...rosterCountries, ...rosterCountries];

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-[120px] pb-8">
      {/* Decorative dot grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(17,37,62,0.10) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 75%)",
        }}
      />
      {/* Three drifting auroras */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/3 size-[640px] -translate-x-1/2 rounded-full blur-[110px] opacity-55 animate-drift-a"
        style={{
          background:
            "radial-gradient(circle, rgba(212,166,116,0.55) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 right-[-10%] size-[520px] rounded-full blur-[120px] opacity-35 animate-drift-b"
        style={{
          background:
            "radial-gradient(circle, rgba(17,37,62,0.20) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-20 -left-32 size-[480px] rounded-full blur-[130px] opacity-30 animate-drift-c"
        style={{
          background:
            "radial-gradient(circle, rgba(212,166,116,0.35) 0%, transparent 70%)",
        }}
      />

      <div className="wrap relative flex flex-1 flex-col">
        <div className="mb-[clamp(32px,6vh,64px)] flex flex-wrap items-start justify-between gap-4">
          <div
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-ink-3 opacity-0"
            style={{
              animation: "aura-fade-in 0.9s var(--ease-aura) 0.2s forwards",
            }}
          >
            <span className="h-px w-12 bg-ink-4" />
            <span>Tiranë · Est. 2024 · International Recruitment</span>
          </div>

          <div
            className="inline-flex items-center gap-2.5 rounded-full border border-line-2 bg-white/60 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-2 opacity-0 backdrop-blur-sm"
            style={{
              animation: "aura-fade-in 0.9s var(--ease-aura) 0.4s forwards",
            }}
          >
            <span className="relative flex size-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative size-1.5 rounded-full bg-accent" />
            </span>
            {all.length} available now
          </div>
        </div>

        <div className="grid items-start gap-12 pb-[clamp(40px,8vh,72px)] lg:grid-cols-[1.6fr_1fr] max-[1080px]:grid-cols-1 max-[1080px]:gap-10">
          <div className="flex flex-col gap-8">
            <h1 className="font-display text-[clamp(52px,8vw,128px)] font-normal leading-[0.94] tracking-[-0.025em] text-ink">
              <span className="block">
                <Word delay="0.15s">A roster</Word>{" "}
                <Word delay="0.25s">of&nbsp;</Word>
                <Word delay="0.35s">
                  <em className="font-display italic text-accent">people</em>,
                </Word>
              </span>
              <span className="block">
                <Word delay="0.55s">not</Word>{" "}
                <Word delay="0.65s">profiles.</Word>
              </span>
            </h1>

            <p
              className="max-w-[560px] text-[clamp(15px,1.4vw,18px)] leading-[1.55] text-ink-2 opacity-0"
              style={{
                animation: "aura-fade-in 0.9s var(--ease-aura) 1s forwards",
              }}
            >
              We bring vetted international workers to Albanian employers. We
              handle the screening, the visas, the relocation — you choose
              who joins your team.
            </p>

            <div
              className="flex flex-wrap items-center gap-3 opacity-0"
              style={{
                animation: "aura-fade-in 0.9s var(--ease-aura) 1.2s forwards",
              }}
            >
              <Link
                href="/roster"
                className="group inline-flex items-center gap-2.5 rounded-full border border-transparent bg-ink px-[26px] py-4 text-sm font-medium text-paper shadow-[0_14px_28px_-14px_rgba(17,37,62,0.45)] transition-all duration-300 hover:-translate-y-px hover:bg-accent hover:shadow-[0_18px_36px_-14px_rgba(177,134,79,0.55)]"
              >
                Browse the roster
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2.5 rounded-full border border-line-2 px-[26px] py-4 text-sm font-medium text-ink transition-all duration-300 hover:border-ink hover:bg-white"
              >
                Speak with us
              </Link>
            </div>

            <dl
              className="mt-2 flex items-center divide-x divide-line opacity-0"
              style={{
                animation: "aura-fade-in 0.9s var(--ease-aura) 1.4s forwards",
              }}
            >
              <HeroStat label="Countries" value="18" />
              <HeroStat label="Sectors" value="12" />
              <HeroStat label="Avg. placement" value="6 wks" />
            </dl>
          </div>

          <div className="lg:pt-12">
            <HeroFeatured candidates={featured} />
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="relative overflow-hidden border-y border-line py-3.5 opacity-0"
        style={{
          animation: "aura-fade-in 0.9s var(--ease-aura) 1.6s forwards",
        }}
      >
        <div className="flex w-max gap-12 animate-marquee">
          {marqueeItems.map((c, i) => (
            <span
              key={`${c.code}-${i}`}
              className="inline-flex items-center gap-3 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3 after:text-ink-4 after:content-['·']"
            >
              {c.name} · {c.code}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1.5 px-5 first:pl-0">
      <dd className="font-display text-2xl leading-none tracking-[-0.01em] text-ink">
        {value}
      </dd>
      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
        {label}
      </dt>
    </div>
  );
}
