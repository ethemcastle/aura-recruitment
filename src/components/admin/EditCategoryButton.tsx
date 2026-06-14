"use client";

import { useState } from "react";
import type { Category } from "@/types/candidate";
import { Dialog } from "@/components/admin/Dialog";
import { CategoryForm } from "@/components/admin/CategoryForm";

export function EditCategoryButton({ category }: { category: Category }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-md px-2 py-1 text-xs text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
        aria-label={`Edit ${category.label}`}
      >
        Edit
      </button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title={`Edit ${category.label}`}
      >
        <CategoryForm
          mode="update"
          category={category}
          onSuccess={() => setOpen(false)}
        />
      </Dialog>
    </>
  );
}
