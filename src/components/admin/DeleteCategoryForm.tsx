"use client";

import { deleteCategoryAction } from "@/app/admin/actions";
import type { Category } from "@/types/candidate";

export function DeleteCategoryForm({
  category,
  count,
}: {
  category: Category;
  count: number;
}) {
  const blocked = count > 0;

  if (blocked) {
    return (
      <button
        type="button"
        disabled
        title={`In use by ${count} ${count === 1 ? "person" : "people"}`}
        className="rounded-md px-2 py-1 text-xs text-zinc-300"
      >
        Delete
      </button>
    );
  }

  return (
    <form
      action={deleteCategoryAction}
      onSubmit={(e) => {
        if (!confirm(`Delete category "${category.label}"?`)) {
          e.preventDefault();
        }
      }}
    >
      <input type="hidden" name="slug" value={category.slug} />
      <button
        type="submit"
        className="rounded-md px-2 py-1 text-xs text-rose-600 hover:bg-rose-50"
        aria-label={`Delete ${category.label}`}
      >
        Delete
      </button>
    </form>
  );
}
