"use client";

import { useMemo, useState } from "react";
import type { Candidate, Category } from "@/types/candidate";
import { EditPersonButton } from "@/components/admin/EditPersonButton";
import { DeletePersonForm } from "@/components/admin/DeletePersonForm";

export function PeopleTable({
  people,
  categories,
}: {
  people: Candidate[];
  categories: Category[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [country, setCountry] = useState("all");

  const labelFor = useMemo(
    () => new Map(categories.map((c) => [c.slug, c.label])),
    [categories],
  );

  const countries = useMemo(() => {
    const map = new Map<string, string>();
    for (const p of people) map.set(p.countryCode, p.country);
    return [...map.entries()]
      .map(([code, name]) => ({ code, name }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [people]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return people.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (country !== "all" && p.countryCode !== country) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.role.toLowerCase().includes(q) ||
        p.ref.toLowerCase().includes(q) ||
        p.country.toLowerCase().includes(q) ||
        p.languages.toLowerCase().includes(q)
      );
    });
  }, [people, query, category, country]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3 rounded-md border border-zinc-200 bg-zinc-50 p-3">
        <label className="relative flex-1 min-w-[220px]">
          <span className="sr-only">Search</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
            fill="none"
          >
            <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search name, role, ref, country, languages"
            className="h-9 w-full rounded-md border border-zinc-200 bg-white pl-9 pr-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-900"
          />
        </label>

        <Select
          label="Category"
          value={category}
          onChange={setCategory}
          options={[
            { value: "all", label: "All categories" },
            ...categories.map((c) => ({ value: c.slug, label: c.label })),
          ]}
        />

        <Select
          label="Country"
          value={country}
          onChange={setCountry}
          options={[
            { value: "all", label: "All countries" },
            ...countries.map((c) => ({
              value: c.code,
              label: `${c.name} (${c.code})`,
            })),
          ]}
        />

        <span className="ml-auto text-xs text-zinc-500">
          {filtered.length} of {people.length}
        </span>
      </div>

      <div className="overflow-x-auto rounded-md border border-zinc-200">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50 text-left text-xs font-medium uppercase tracking-[0.08em] text-zinc-500">
              <th className="px-3 py-2.5 font-medium">Photo</th>
              <th className="px-3 py-2.5 font-medium">Ref</th>
              <th className="px-3 py-2.5 font-medium">Name</th>
              <th className="px-3 py-2.5 font-medium">Role</th>
              <th className="px-3 py-2.5 font-medium">Country</th>
              <th className="px-3 py-2.5 font-medium">Exp.</th>
              <th className="px-3 py-2.5 font-medium">Languages</th>
              <th className="px-3 py-2.5 font-medium">Category</th>
              <th className="px-3 py-2.5 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr
                key={p.ref}
                className="border-b border-zinc-200 last:border-b-0 hover:bg-zinc-50"
              >
                <td className="px-3 py-2">
                  <span className="flex size-9 items-center justify-center overflow-hidden rounded-md border border-zinc-200 bg-zinc-50 font-display text-base italic text-zinc-400">
                    {p.photoUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={p.photoUrl}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      p.initial
                    )}
                  </span>
                </td>
                <td className="px-3 py-2 font-mono text-xs text-zinc-500">
                  {p.ref}
                </td>
                <td className="px-3 py-2 text-zinc-900">{p.name}</td>
                <td className="px-3 py-2 text-zinc-600">{p.role}</td>
                <td className="px-3 py-2 text-zinc-600">
                  {p.country}{" "}
                  <span className="font-mono text-xs text-zinc-400">
                    {p.countryCode}
                  </span>
                </td>
                <td className="px-3 py-2 text-zinc-600">{p.experience}</td>
                <td className="px-3 py-2 font-mono text-xs text-zinc-500">
                  {p.languages}
                </td>
                <td className="px-3 py-2 text-zinc-600">
                  {labelFor.get(p.category) ?? p.category}
                </td>
                <td className="px-3 py-2">
                  <div className="flex items-center justify-end gap-1">
                    <EditPersonButton person={p} categories={categories} />
                    <DeletePersonForm person={p} />
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={9}
                  className="px-3 py-10 text-center text-sm text-zinc-500"
                >
                  No people match those filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (next: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="flex items-center gap-2 text-xs text-zinc-500">
      <span>{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-9 rounded-md border border-zinc-200 bg-white px-2.5 text-sm text-zinc-900 outline-none focus:border-zinc-900"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
