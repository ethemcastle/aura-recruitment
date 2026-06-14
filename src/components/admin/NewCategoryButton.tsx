"use client";

import { useState } from "react";
import { Dialog } from "@/components/admin/Dialog";
import { CategoryForm } from "@/components/admin/CategoryForm";

export function NewCategoryButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700"
      >
        <span className="text-base leading-none">+</span> New category
      </button>
      <Dialog open={open} onClose={() => setOpen(false)} title="New category">
        <CategoryForm onSuccess={() => setOpen(false)} />
      </Dialog>
    </>
  );
}
