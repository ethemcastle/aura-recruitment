import Link from "next/link";
import { requireSession } from "@/lib/auth";
import { listCategories, listPeople } from "@/lib/store";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Overview · Admin",
};

export default async function AdminOverviewPage() {
  await requireSession();
  const [people, categories] = await Promise.all([
    listPeople(),
    listCategories(),
  ]);
  const countries = new Set(people.map((p) => p.countryCode)).size;

  return (
    <div className="flex flex-col gap-8">
      <header>
        <div className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
          Overview
        </div>
        <h1 className="font-display text-3xl tracking-tight">Roster status</h1>
      </header>

      <table className="w-full border-collapse text-sm">
        <tbody>
          <Row label="People in roster" value={people.length} href="/admin/people" />
          <Row label="Categories" value={categories.length} href="/admin/categories" />
          <Row label="Countries represented" value={countries} />
        </tbody>
      </table>

      <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-zinc-200 pt-6 text-sm">
        <Link href="/admin/people" className="text-zinc-900 hover:underline">
          → Manage people
        </Link>
        <Link href="/admin/categories" className="text-zinc-900 hover:underline">
          → Manage categories
        </Link>
        <Link href="/" className="text-zinc-500 hover:text-zinc-900">
          → Visit public site
        </Link>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  href,
}: {
  label: string;
  value: number;
  href?: string;
}) {
  return (
    <tr className="border-t border-zinc-200 first:border-t-0">
      <td className="py-3 text-zinc-600">
        {href ? (
          <Link href={href} className="hover:text-zinc-900">
            {label}
          </Link>
        ) : (
          label
        )}
      </td>
      <td className="py-3 text-right font-display text-2xl tracking-tight">
        {value}
      </td>
    </tr>
  );
}
