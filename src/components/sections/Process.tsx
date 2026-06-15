import { processSteps } from "@/data/site";
import { SectionHead } from "@/components/sections/SectionHead";

export function Process() {
  return (
    <section
      id="process"
      className="border-b border-line py-[clamp(80px,14vh,160px)]"
    >
      <div className="wrap">
        <SectionHead
          eyebrow="How it works"
          title={
            <>
              Three steps. <em>One placement.</em>
            </>
          }
          lede={
            <>
              We&apos;ve designed the process around your time. You see real
              people, in their own words, ready to interview. We handle every
              administrative detail behind the scenes.
            </>
          }
        />

        <div className="grid grid-cols-3 gap-6 max-[880px]:grid-cols-1 max-[880px]:gap-4">
          {processSteps.map((step, i) => (
            <article
              key={step.numeral}
              className="reveal group relative overflow-hidden rounded-[4px] border border-line bg-white px-8 pt-9 pb-10 shadow-[0_8px_24px_-16px_rgba(17,37,62,0.10)] transition-all duration-500 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_18px_36px_-20px_rgba(168,127,78,0.30)]"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="mb-12 font-display text-[56px] italic font-normal leading-none text-accent">
                {step.numeral}
              </div>
              <h3 className="mb-3 font-display text-[28px] font-normal leading-[1.1] tracking-[-0.015em]">
                {step.title}
              </h3>
              <p className="text-sm leading-[1.55] text-ink-2">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
