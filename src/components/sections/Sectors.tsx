import { sectors } from "@/data/site";
import { SectionHead } from "@/components/sections/SectionHead";

export function Sectors() {
  return (
    <section
      id="sectors"
      className="border-b border-line py-[clamp(80px,14vh,160px)] text-left"
    >
      <div className="wrap">
        <SectionHead
          eyebrow="Where they're working"
          title={
            <>
              Sectors we <em>serve.</em>
            </>
          }
          lede={
            <>
              From summer-season tourism on the coast to year-round
              construction in Tiranë, our candidates work across the Albanian
              economy. We match by skill and by season.
            </>
          }
        />

        <p className="font-display text-[clamp(36px,6.5vw,96px)] font-normal leading-[1.05] tracking-[-0.02em]">
          {sectors.map((s, i) => (
            <span key={s.label}>
              <span
                className={`cursor-default text-ink-3 transition-colors duration-500 hover:text-ink ${
                  s.italic ? "italic" : ""
                }`}
              >
                {s.label}
              </span>
              {i < sectors.length - 1 && (
                <span className="mx-[0.15em] not-italic text-accent">·</span>
              )}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
