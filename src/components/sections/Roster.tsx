import Link from "next/link";
import { listCategories, listPeople } from "@/lib/store";
import { SectionHead } from "@/components/sections/SectionHead";
import { RosterGrid } from "@/components/sections/RosterGrid";

export async function Roster() {
  const [people, categories] = await Promise.all([
    listPeople(),
    listCategories(),
  ]);
  const featured = people.slice(0, 8);

  return (
    <section
      id="roster"
      className="border-b border-line py-[clamp(80px,14vh,160px)]"
    >
      <div className="wrap">
        <SectionHead
          eyebrow="The Roster"
          title={
            <>
              Featured this <em>week.</em>
            </>
          }
          lede={
            <>
              A curated selection from our active roster. Each candidate has
              completed background checks, language assessment, and a video
              interview with our team.
            </>
          }
        />

        <RosterGrid people={featured} categories={categories} />

        <div className="mt-12 text-center">
          <Link
            href="/roster"
            className="inline-flex items-center gap-3 border-b border-line-2 pb-1.5 font-mono text-xs uppercase tracking-[0.14em] text-ink-2 transition-all duration-300 hover:border-ink hover:text-ink"
          >
            View the full roster of {people.length} →
          </Link>
        </div>
      </div>
    </section>
  );
}
