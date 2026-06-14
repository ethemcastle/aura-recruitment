import "server-only";
import fs from "node:fs/promises";
import path from "node:path";
import { defaultCategories, type Candidate, type Category } from "@/types/candidate";
import { candidates as seedCandidates } from "@/data/candidates";

const PUBLIC_DIR = path.join(process.cwd(), "public");

async function unlinkPublic(publicPath: string): Promise<void> {
  if (!publicPath.startsWith("/uploads/")) return;
  const target = path.join(PUBLIC_DIR, publicPath);
  try {
    await fs.unlink(target);
  } catch {
    // file already gone or never existed — fine
  }
}

const FILE = path.join(process.cwd(), "data", "runtime", "store.json");

type Shape = {
  people: Candidate[];
  categories: Category[];
};

function seed(): Shape {
  return {
    people: [...seedCandidates],
    categories: [...defaultCategories],
  };
}

let cache: Shape | null = null;
let writeChain: Promise<void> = Promise.resolve();

async function read(): Promise<Shape> {
  if (cache) return cache;
  try {
    const raw = await fs.readFile(FILE, "utf-8");
    const parsed = JSON.parse(raw) as Partial<Shape>;
    cache = {
      people: parsed.people ?? seedCandidates,
      categories: parsed.categories ?? defaultCategories,
    };
  } catch {
    cache = seed();
  }
  return cache;
}

async function persist(next: Shape): Promise<void> {
  cache = next;
  writeChain = writeChain.then(async () => {
    await fs.mkdir(path.dirname(FILE), { recursive: true });
    await fs.writeFile(FILE, JSON.stringify(next, null, 2));
  });
  await writeChain;
}

export async function listPeople(): Promise<Candidate[]> {
  return (await read()).people;
}

export async function listCategories(): Promise<Category[]> {
  return (await read()).categories;
}

export async function getPerson(ref: string): Promise<Candidate | null> {
  return (await read()).people.find((p) => p.ref === ref) ?? null;
}

export async function addPerson(person: Candidate): Promise<void> {
  const state = await read();
  await persist({
    ...state,
    people: [person, ...state.people],
  });
}

export async function updatePerson(
  ref: string,
  patch: Partial<Omit<Candidate, "ref">>,
): Promise<void> {
  const state = await read();
  let oldPhoto: string | undefined;
  const people = state.people.map((p) => {
    if (p.ref !== ref) return p;
    if ("photoUrl" in patch && patch.photoUrl !== p.photoUrl) {
      oldPhoto = p.photoUrl;
    }
    return { ...p, ...patch };
  });
  await persist({ ...state, people });
  if (oldPhoto) await unlinkPublic(oldPhoto);
}

export async function deletePerson(ref: string): Promise<void> {
  const state = await read();
  const target = state.people.find((p) => p.ref === ref);
  if (!target) return;
  await persist({
    ...state,
    people: state.people.filter((p) => p.ref !== ref),
  });
  if (target.photoUrl) await unlinkPublic(target.photoUrl);
}

export async function addCategory(category: Category): Promise<void> {
  const state = await read();
  if (state.categories.some((c) => c.slug === category.slug)) {
    throw new Error(`Category "${category.slug}" already exists.`);
  }
  await persist({
    ...state,
    categories: [...state.categories, category],
  });
}

export async function updateCategory(
  slug: string,
  patch: Partial<Pick<Category, "label">>,
): Promise<void> {
  const state = await read();
  const categories = state.categories.map((c) =>
    c.slug === slug ? { ...c, ...patch } : c,
  );
  await persist({ ...state, categories });
}

export async function deleteCategory(slug: string): Promise<void> {
  const state = await read();
  const used = state.people.filter((p) => p.category === slug).length;
  if (used > 0) {
    throw new Error(
      `Cannot delete category — ${used} ${used === 1 ? "person uses" : "people use"} it.`,
    );
  }
  await persist({
    ...state,
    categories: state.categories.filter((c) => c.slug !== slug),
  });
}

export function nextRef(people: Candidate[]): string {
  const nums = people
    .map((p) => Number.parseInt(p.ref, 10))
    .filter((n) => Number.isFinite(n));
  const next = (nums.length ? Math.max(...nums) : 46) + 1;
  return String(next).padStart(3, "0");
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
