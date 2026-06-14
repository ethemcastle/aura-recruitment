"use client";

import { useState } from "react";
import type { Candidate, Category } from "@/types/candidate";
import { Dialog } from "@/components/admin/Dialog";
import { PersonForm } from "@/components/admin/PersonForm";

export function EditPersonButton({
  person,
  categories,
}: {
  person: Candidate;
  categories: Category[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-md px-2 py-1 text-xs text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
        aria-label={`Edit ${person.name}`}
      >
        Edit
      </button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title={`Edit ${person.name}`}
      >
        <PersonForm
          mode="update"
          person={person}
          categories={categories}
          onSuccess={() => setOpen(false)}
        />
      </Dialog>
    </>
  );
}
