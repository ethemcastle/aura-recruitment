import { requireSession } from "@/lib/auth";
import { listCategories, listPeople } from "@/lib/store";
import { NewPersonButton } from "@/components/admin/NewPersonButton";
import { PeopleTable } from "@/components/admin/PeopleTable";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "People · Admin",
};

export default async function AdminPeoplePage() {
  await requireSession();
  const [people, categories] = await Promise.all([
    listPeople(),
    listCategories(),
  ]);

  return (
    <div className="flex flex-col gap-8">
      <header className="flex items-end justify-between gap-4">
        <div>
          <div className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
            People · {people.length}
          </div>
          <h1 className="font-display text-3xl tracking-tight">
            Manage roster
          </h1>
        </div>
        <NewPersonButton categories={categories} />
      </header>

      <PeopleTable people={people} categories={categories} />
    </div>
  );
}
