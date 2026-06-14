"use client";

import { deletePersonAction } from "@/app/admin/actions";
import type { Candidate } from "@/types/candidate";

export function DeletePersonForm({ person }: { person: Candidate }) {
  return (
    <form
      action={deletePersonAction}
      onSubmit={(e) => {
        if (!confirm(`Delete ${person.name} (N. ${person.ref})?`)) {
          e.preventDefault();
        }
      }}
    >
      <input type="hidden" name="ref" value={person.ref} />
      <button
        type="submit"
        className="rounded-md px-2 py-1 text-xs text-rose-600 hover:bg-rose-50"
        aria-label={`Delete ${person.name}`}
      >
        Delete
      </button>
    </form>
  );
}
