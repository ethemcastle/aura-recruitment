"use client";

import { useActionState, useEffect, useRef } from "react";
import {
  createCategoryAction,
  updateCategoryAction,
  type CategoryState,
} from "@/app/admin/actions";
import type { Category } from "@/types/candidate";

const initial: CategoryState = { status: "idle", message: "" };

export function CategoryForm({
  mode = "create",
  category,
  onSuccess,
}: {
  mode?: "create" | "update";
  category?: Category;
  onSuccess?: () => void;
}) {
  const action =
    mode === "update" ? updateCategoryAction : createCategoryAction;
  const [state, formAction, pending] = useActionState(action, initial);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
      onSuccess?.();
    }
  }, [state.status, onSuccess]);

  return (
    <form
      ref={formRef}
      action={formAction}
      noValidate
      className="flex flex-col gap-5"
    >
      {mode === "update" && category && (
        <input type="hidden" name="slug" value={category.slug} />
      )}

      <div className="flex flex-col gap-1.5">
        <label htmlFor="label" className="text-xs font-medium text-zinc-700">
          Category label
        </label>
        <input
          id="label"
          name="label"
          type="text"
          defaultValue={category?.label}
          placeholder="e.g. Tourism"
          className="h-9 w-full rounded-md border border-zinc-200 bg-white px-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-900"
          aria-invalid={Boolean(state.errors?.label)}
          required
        />
        {state.errors?.label && (
          <p className="text-xs text-rose-600" aria-live="polite">
            {state.errors.label}
          </p>
        )}
        <p className="text-xs text-zinc-400">
          {mode === "update" ? (
            <>
              Slug:{" "}
              <code className="font-mono">{category?.slug}</code> (immutable)
            </>
          ) : (
            <>Slug is derived automatically — e.g. &ldquo;Tourism&rdquo; → tourism</>
          )}
        </p>
      </div>

      {state.status === "error" && !state.errors && (
        <p className="text-sm text-rose-600" aria-live="polite">
          {state.message}
        </p>
      )}

      <div className="flex items-center justify-end gap-3 border-t border-zinc-200 pt-5">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-700 disabled:opacity-60"
        >
          {pending
            ? "Saving…"
            : mode === "update"
              ? "Save changes"
              : "Save category"}
        </button>
      </div>

      {state.status === "success" && (
        <p className="text-sm text-emerald-600" role="status">
          {state.message}
        </p>
      )}
    </form>
  );
}
