"use client";

import { useState } from "react";
import type { Category } from "@/types/candidate";
import { Dialog } from "@/components/admin/Dialog";
import { PersonForm } from "@/components/admin/PersonForm";

export function NewPersonButton({ categories }: { categories: Category[] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700"
      >
        <span className="text-base leading-none">+</span> New person
      </button>
      <Dialog open={open} onClose={() => setOpen(false)} title="New person">
        <PersonForm
          categories={categories}
          onSuccess={() => setOpen(false)}
        />
      </Dialog>
    </>
  );
}
