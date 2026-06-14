import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="pt-20 pb-12">
      <div className="wrap">
        <div className="mb-20 grid grid-cols-2 gap-12 border-b border-line pb-12 max-[720px]:mb-12 max-[720px]:grid-cols-1 max-[720px]:gap-8">
          <div className="font-display text-[clamp(28px,4vw,48px)] font-normal leading-[1.1] tracking-[-0.015em]">
            Talent has <em className="italic text-accent">no borders.</em>
            <br />
            We make the rest of the paperwork disappear.
          </div>
          <div className="grid grid-cols-2 gap-6 self-end">
            <div>
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
                Office
              </div>
              <div className="text-[15px] leading-[1.6] text-ink-2">
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2.split(",")[0]}
                <br />
                Albania
              </div>
            </div>
            <div>
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
                Connect
              </div>
              <div className="text-[15px] leading-[1.6] text-ink-2 [&_a:hover]:text-ink">
                <a href={`mailto:${siteConfig.email}`}>Email</a>
                <br />
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <br />
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3 max-[600px]:flex-col max-[600px]:gap-3">
          <span>
            {siteConfig.fullName} · {siteConfig.license}
          </span>
          <span>© 2026 · Tiranë</span>
        </div>
      </div>
    </footer>
  );
}
