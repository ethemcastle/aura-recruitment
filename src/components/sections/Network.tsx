import { rosterCountries } from "@/data/candidates";
import { SectionHead } from "@/components/sections/SectionHead";

export function Network() {
  const W = 720;
  const H = 520;
  const cx = W / 2;
  const cy = H / 2;
  const radius = 200;

  const nodes = rosterCountries.map((c, i) => {
    const angle = (i / rosterCountries.length) * Math.PI * 2 - Math.PI / 2;
    return {
      ...c,
      x: cx + Math.cos(angle) * radius,
      y: cy + Math.sin(angle) * radius,
      delay: (i % 6) * 0.4,
    };
  });

  return (
    <section
      id="network"
      className="relative overflow-hidden border-b border-line py-[clamp(80px,14vh,160px)]"
    >
      {/* Two drifting auroras */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 left-1/4 size-[480px] rounded-full blur-[140px] opacity-25 animate-drift-a"
        style={{
          background:
            "radial-gradient(circle, rgba(212,166,116,0.45) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-1/4 right-1/4 size-[420px] rounded-full blur-[140px] opacity-25 animate-drift-c"
        style={{
          background:
            "radial-gradient(circle, rgba(17,37,62,0.30) 0%, transparent 70%)",
        }}
      />

      <div className="wrap relative">
        <SectionHead
          eyebrow="Our network"
          title={
            <>
              A constellation, with Tiranë at the <em>centre.</em>
            </>
          }
          lede={
            <>
              We source talent from twelve home countries — and counting.
              Every candidate is interviewed in Albania before they appear
              on the roster.
            </>
          }
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="relative mx-auto w-full max-w-[720px]">
            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="h-auto w-full"
              role="img"
              aria-label="Source countries connected to Tiranë"
            >
              {/* Connection lines */}
              {nodes.map((n) => (
                <line
                  key={`l-${n.code}`}
                  x1={cx}
                  y1={cy}
                  x2={n.x}
                  y2={n.y}
                  stroke="var(--color-line-2)"
                  strokeWidth="1"
                  strokeDasharray="3 6"
                  className="animate-dash-flow"
                  style={{ animationDelay: `${n.delay}s` }}
                />
              ))}

              {/* Outer ring */}
              <circle
                cx={cx}
                cy={cy}
                r={radius}
                fill="none"
                stroke="var(--color-line)"
                strokeWidth="1"
                strokeDasharray="2 6"
                opacity={0.7}
              />

              {/* Country nodes */}
              {nodes.map((n) => (
                <g key={n.code}>
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r="9"
                    fill="var(--color-accent)"
                    opacity="0.18"
                    className="animate-pulse-node"
                    style={{
                      transformBox: "fill-box",
                      transformOrigin: "center",
                      animationDelay: `${n.delay}s`,
                    }}
                  />
                  <circle cx={n.x} cy={n.y} r="3.5" fill="var(--color-accent)" />
                  <text
                    x={n.x + (n.x >= cx ? 10 : -10)}
                    y={n.y + 4}
                    fontSize="10"
                    fontFamily="var(--font-mono)"
                    fill="var(--color-ink-3)"
                    textAnchor={n.x >= cx ? "start" : "end"}
                    letterSpacing="2"
                  >
                    {n.code}
                  </text>
                </g>
              ))}

              {/* Central Tiranë node */}
              <circle
                cx={cx}
                cy={cy}
                r="22"
                fill="var(--color-accent)"
                opacity="0.12"
                className="animate-pulse-node"
                style={{
                  transformBox: "fill-box",
                  transformOrigin: "center",
                }}
              />
              <circle cx={cx} cy={cy} r="10" fill="var(--color-ink)" />
              <text
                x={cx}
                y={cy + 38}
                fontSize="14"
                fontFamily="var(--font-display)"
                fill="var(--color-ink)"
                textAnchor="middle"
                fontStyle="italic"
              >
                Tiranë
              </text>
            </svg>
          </div>

          <div className="flex flex-col gap-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
              Source countries · {rosterCountries.length}
            </div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-[15px] text-ink-2">
              {rosterCountries.map((c) => (
                <li
                  key={c.code}
                  className="flex items-center justify-between border-b border-line py-1.5"
                >
                  <span>{c.name}</span>
                  <span className="font-mono text-[11px] text-ink-3">
                    {c.code}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
