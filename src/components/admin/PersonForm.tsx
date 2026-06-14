"use client";

import { useActionState, useEffect, useMemo, useRef, useState } from "react";
import {
  createPersonAction,
  updatePersonAction,
  type PersonState,
} from "@/app/admin/actions";
import type { Candidate, Category } from "@/types/candidate";

const initial: PersonState = { status: "idle", message: "" };

type Mode = "create" | "update";

export function PersonForm({
  categories,
  mode = "create",
  person,
  onSuccess,
}: {
  categories: Category[];
  mode?: Mode;
  person?: Candidate;
  onSuccess?: () => void;
}) {
  const action = mode === "update" ? updatePersonAction : createPersonAction;
  const [state, formAction, pending] = useActionState(action, initial);
  const formRef = useRef<HTMLFormElement>(null);
  const [newPhoto, setNewPhoto] = useState<string | null>(null);
  const [removePhoto, setRemovePhoto] = useState(false);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
      setNewPhoto(null);
      setRemovePhoto(false);
      onSuccess?.();
    }
  }, [state.status, onSuccess]);

  const currentPhoto = useMemo(() => {
    if (newPhoto) return newPhoto;
    if (removePhoto) return null;
    return person?.photoUrl ?? null;
  }, [newPhoto, removePhoto, person?.photoUrl]);

  function onPhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setNewPhoto(URL.createObjectURL(file));
      setRemovePhoto(false);
    } else {
      setNewPhoto(null);
    }
  }

  function clearPhoto() {
    setNewPhoto(null);
    setRemovePhoto(true);
    const input = formRef.current?.elements.namedItem(
      "photo",
    ) as HTMLInputElement | null;
    if (input) input.value = "";
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      noValidate
      className="flex flex-col gap-5"
    >
      {mode === "update" && person && (
        <input type="hidden" name="ref" value={person.ref} />
      )}
      <input type="hidden" name="removePhoto" value={removePhoto ? "1" : "0"} />

      <Field label="Photo" htmlFor="photo" error={state.errors?.photo}>
        <div className="flex items-center gap-4">
          <span className="flex size-16 items-center justify-center overflow-hidden rounded-md border border-zinc-200 bg-zinc-50 text-zinc-300">
            {currentPhoto ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={currentPhoto}
                alt=""
                className="h-full w-full object-cover"
              />
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 16l5-5 4 4 3-3 6 6M3 7h18v12H3z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            )}
          </span>
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <input
              id="photo"
              name="photo"
              type="file"
              accept="image/png,image/jpeg,image/webp,image/gif"
              onChange={onPhotoChange}
              className="text-sm text-zinc-600 file:mr-3 file:rounded-md file:border-0 file:bg-zinc-900 file:px-3 file:py-1.5 file:text-sm file:text-white hover:file:bg-zinc-700"
            />
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs text-zinc-400">
                JPG, PNG, WEBP or GIF · max 5 MB
              </p>
              {currentPhoto && (
                <button
                  type="button"
                  onClick={clearPhoto}
                  className="text-xs text-zinc-500 underline-offset-2 hover:text-rose-600 hover:underline"
                >
                  Remove photo
                </button>
              )}
            </div>
          </div>
        </div>
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={state.errors?.name}>
          <input
            id="name"
            name="name"
            type="text"
            defaultValue={person?.name}
            placeholder="e.g. Lina T."
            className={inputClass}
            required
          />
        </Field>

        <Field label="Role" htmlFor="role" error={state.errors?.role}>
          <input
            id="role"
            name="role"
            type="text"
            defaultValue={person?.role}
            placeholder="e.g. Pastry chef"
            className={inputClass}
            required
          />
        </Field>

        <Field label="Country" htmlFor="country" error={state.errors?.country}>
          <input
            id="country"
            name="country"
            type="text"
            defaultValue={person?.country}
            placeholder="e.g. Vietnam"
            className={inputClass}
            required
          />
        </Field>

        <Field
          label="Country code"
          htmlFor="countryCode"
          error={state.errors?.countryCode}
        >
          <input
            id="countryCode"
            name="countryCode"
            type="text"
            maxLength={2}
            defaultValue={person?.countryCode}
            placeholder="VN"
            className={`${inputClass} uppercase`}
            required
          />
        </Field>

        <Field
          label="Experience"
          htmlFor="experience"
          error={state.errors?.experience}
        >
          <input
            id="experience"
            name="experience"
            type="text"
            defaultValue={person?.experience}
            placeholder="e.g. 8 yrs"
            className={inputClass}
            required
          />
        </Field>

        <Field
          label="Languages"
          htmlFor="languages"
          error={state.errors?.languages}
        >
          <input
            id="languages"
            name="languages"
            type="text"
            defaultValue={person?.languages}
            placeholder="e.g. EN · VI"
            className={inputClass}
            required
          />
        </Field>

        <Field
          label="Category"
          htmlFor="category"
          error={state.errors?.category}
        >
          <select
            id="category"
            name="category"
            defaultValue={person?.category ?? ""}
            className={inputClass}
            required
          >
            <option value="" disabled>
              Pick a category
            </option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.label}
              </option>
            ))}
          </select>
        </Field>
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
              : "Save person"}
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

const inputClass =
  "h-9 w-full rounded-md border border-zinc-200 bg-white px-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-900";

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="text-xs font-medium text-zinc-700"
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="text-xs text-rose-600" aria-live="polite">
          {error}
        </p>
      )}
    </div>
  );
}
