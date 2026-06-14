import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { RosterGrid } from "@/components/sections/RosterGrid";
import { RevealMount } from "@/components/shortlist/RevealMount";
import { listCategories, listPeople } from "@/lib/store";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Roster · Aura Recruitment",
  description:
    "Browse Aura's full roster of vetted international workers ready to relocate to Albania.",
};

export default async function RosterPage() {
  const [people, categories] = await Promise.all([
    listPeople(),
    listCategories(),
  ]);
  const countries = new Set(people.map((p) => p.countryCode)).size;

  return (
    <>
      <Header />
      <main>
        <section className="pt-[160px] pb-[clamp(64px,10vh,120px)]">
          <div className="wrap">
            <div className="flex flex-col gap-7">
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-ink-3">
                <span className="h-px w-12 bg-ink-4" />
                The full roster
              </div>
              <h1 className="max-w-[1100px] font-display text-[clamp(48px,9vw,128px)] font-normal leading-[0.95] tracking-[-0.025em]">
                Everyone we&apos;d <em className="italic text-accent">vouch&nbsp;for</em>.
              </h1>
              <p className="max-w-[640px] text-[clamp(15px,1.4vw,18px)] leading-[1.55] text-ink-2">
                Every person below has been background-checked, language-tested,
                and interviewed on camera by an Aura recruiter. Filter by
                sector, shortlist who you like, and we&apos;ll bring the rest
                of the introductions to you.
              </p>

              <dl className="mt-6 grid grid-cols-3 gap-0 border-y border-line py-7 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3 max-[600px]:grid-cols-1 max-[600px]:gap-y-6">
                <Metric label="People available" value={people.length} />
                <Metric label="Countries" value={countries} bordered />
                <Metric label="Categories" value={categories.length} bordered />
              </dl>
            </div>
          </div>
        </section>

        <section className="border-t border-line pb-[clamp(80px,12vh,140px)] pt-[clamp(48px,8vh,96px)]">
          <div className="wrap">
            <RosterGrid people={people} categories={categories} showMeta={false} />
          </div>
        </section>
      </main>
      <Footer />
      <RevealMount />
    </>
  );
}

function Metric({
  label,
  value,
  bordered = false,
}: {
  label: string;
  value: number;
  bordered?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-2 px-6 first:pl-0 ${
        bordered ? "border-l border-line max-[600px]:border-l-0 max-[600px]:pl-0" : ""
      }`}
    >
      <dd className="font-display text-[clamp(32px,4.5vw,56px)] font-normal leading-none tracking-[-0.02em] text-ink">
        {value}
      </dd>
      <dt>{label}</dt>
    </div>
  );
}
