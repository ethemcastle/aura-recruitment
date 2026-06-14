import { requireSession } from "@/lib/auth";
import { listCategories, listPeople } from "@/lib/store";
import { NewCategoryButton } from "@/components/admin/NewCategoryButton";
import { EditCategoryButton } from "@/components/admin/EditCategoryButton";
import { DeleteCategoryForm } from "@/components/admin/DeleteCategoryForm";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Categories · Admin",
};

export default async function AdminCategoriesPage() {
  await requireSession();
  const [categories, people] = await Promise.all([
    listCategories(),
    listPeople(),
  ]);

  const counts = new Map<string, number>();
  for (const p of people) {
    counts.set(p.category, (counts.get(p.category) ?? 0) + 1);
  }

  return (
    <div className="flex flex-col gap-8">
      <header className="flex items-end justify-between gap-4">
        <div>
          <div className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
            Categories · {categories.length}
          </div>
          <h1 className="font-display text-3xl tracking-tight">
            Manage categories
          </h1>
        </div>
        <NewCategoryButton />
      </header>

      <div className="overflow-x-auto rounded-md border border-zinc-200">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50 text-left text-xs font-medium uppercase tracking-[0.08em] text-zinc-500">
              <th className="px-3 py-2.5 font-medium">Label</th>
              <th className="px-3 py-2.5 font-medium">Slug</th>
              <th className="px-3 py-2.5 text-right font-medium">People</th>
              <th className="px-3 py-2.5 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((c) => {
              const count = counts.get(c.slug) ?? 0;
              return (
                <tr
                  key={c.slug}
                  className="border-b border-zinc-200 last:border-b-0 hover:bg-zinc-50"
                >
                  <td className="px-3 py-2 text-zinc-900">{c.label}</td>
                  <td className="px-3 py-2 font-mono text-xs text-zinc-500">
                    {c.slug}
                  </td>
                  <td className="px-3 py-2 text-right font-mono text-xs text-zinc-500">
                    {count}
                  </td>
                  <td className="px-3 py-2">
                    <div className="flex items-center justify-end gap-1">
                      <EditCategoryButton category={c} />
                      <DeleteCategoryForm category={c} count={count} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
