"use server";

import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "@/lib/auth";
import {
  addCategory,
  addPerson,
  deleteCategory,
  deletePerson,
  getPerson,
  listCategories,
  listPeople,
  nextRef,
  slugify,
  updateCategory,
  updatePerson,
} from "@/lib/store";

const MAX_PHOTO_BYTES = 5 * 1024 * 1024;
const EXT_BY_TYPE: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
};

async function savePhoto(file: File, ref: string): Promise<string | null> {
  if (file.size === 0) return null;
  if (!(file.type in EXT_BY_TYPE)) {
    throw new Error("Photo must be a JPG, PNG, WEBP, or GIF.");
  }
  if (file.size > MAX_PHOTO_BYTES) {
    throw new Error("Photo must be 5 MB or smaller.");
  }
  const ext = EXT_BY_TYPE[file.type];
  const filename = `${ref}-${crypto.randomBytes(4).toString("hex")}.${ext}`;
  const dir = path.join(process.cwd(), "public", "uploads");
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(
    path.join(dir, filename),
    Buffer.from(await file.arrayBuffer()),
  );
  return `/uploads/${filename}`;
}

export type LoginState = {
  status: "idle" | "error";
  message: string;
};

export async function loginAction(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const password = String(formData.get("password") ?? "");
  const ok = await signIn(password);
  if (!ok) {
    return { status: "error", message: "Incorrect password." };
  }
  redirect("/admin");
}

export async function signOutAction(): Promise<void> {
  await signOut();
  redirect("/admin/login");
}

export type PersonState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<
    Record<
      | "name"
      | "role"
      | "country"
      | "countryCode"
      | "experience"
      | "languages"
      | "category"
      | "photo",
      string
    >
  >;
};

type PersonFields = {
  name: string;
  role: string;
  country: string;
  countryCode: string;
  experience: string;
  languages: string;
  category: string;
  photo: File | null;
  removePhoto: boolean;
};

function readPersonFields(formData: FormData): PersonFields {
  const photo = formData.get("photo");
  return {
    name: String(formData.get("name") ?? "").trim(),
    role: String(formData.get("role") ?? "").trim(),
    country: String(formData.get("country") ?? "").trim(),
    countryCode: String(formData.get("countryCode") ?? "").trim().toUpperCase(),
    experience: String(formData.get("experience") ?? "").trim(),
    languages: String(formData.get("languages") ?? "").trim(),
    category: String(formData.get("category") ?? "").trim(),
    photo: photo instanceof File ? photo : null,
    removePhoto: formData.get("removePhoto") === "1",
  };
}

function validatePersonFields(
  f: PersonFields,
): PersonState["errors"] | null {
  const errors: PersonState["errors"] = {};
  if (f.name.length < 2) errors.name = "Please enter a name.";
  if (!f.role) errors.role = "Please enter a role.";
  if (!f.country) errors.country = "Please enter a country.";
  if (!/^[A-Z]{2}$/.test(f.countryCode))
    errors.countryCode = "Use a 2-letter country code (e.g. NP).";
  if (!f.experience) errors.experience = "Please enter experience.";
  if (!f.languages) errors.languages = "Please enter languages.";
  if (!f.category) errors.category = "Please pick a category.";
  return Object.keys(errors).length ? errors : null;
}

function invalid(errors: PersonState["errors"]): PersonState {
  return {
    status: "error",
    message: "Please fix the highlighted fields.",
    errors,
  };
}

function revalidatePublic() {
  revalidatePath("/");
  revalidatePath("/roster");
  revalidatePath("/admin");
  revalidatePath("/admin/people");
  revalidatePath("/admin/categories");
}

export async function createPersonAction(
  _prev: PersonState,
  formData: FormData,
): Promise<PersonState> {
  const f = readPersonFields(formData);
  const errors = validatePersonFields(f);
  if (errors) return invalid(errors);

  const people = await listPeople();
  const ref = nextRef(people);

  let photoUrl: string | undefined;
  if (f.photo && f.photo.size > 0) {
    try {
      photoUrl = (await savePhoto(f.photo, ref)) ?? undefined;
    } catch (e) {
      return invalid({
        photo: e instanceof Error ? e.message : "Upload failed.",
      });
    }
  }

  await addPerson({
    ref,
    name: f.name,
    role: f.role,
    country: f.country,
    countryCode: f.countryCode,
    initial: f.name.charAt(0).toUpperCase(),
    experience: f.experience,
    languages: f.languages,
    category: f.category,
    photoUrl,
  });

  revalidatePublic();
  return { status: "success", message: `Added ${f.name} to the roster.` };
}

export async function updatePersonAction(
  _prev: PersonState,
  formData: FormData,
): Promise<PersonState> {
  const ref = String(formData.get("ref") ?? "").trim();
  if (!ref) {
    return invalid({ name: "Missing reference number." });
  }
  const existing = await getPerson(ref);
  if (!existing) {
    return {
      status: "error",
      message: `No person with ref ${ref} — they may have been deleted.`,
    };
  }

  const f = readPersonFields(formData);
  const errors = validatePersonFields(f);
  if (errors) return invalid(errors);

  let photoUrl: string | undefined = existing.photoUrl;
  if (f.photo && f.photo.size > 0) {
    try {
      photoUrl = (await savePhoto(f.photo, ref)) ?? undefined;
    } catch (e) {
      return invalid({
        photo: e instanceof Error ? e.message : "Upload failed.",
      });
    }
  } else if (f.removePhoto) {
    photoUrl = undefined;
  }

  await updatePerson(ref, {
    name: f.name,
    role: f.role,
    country: f.country,
    countryCode: f.countryCode,
    initial: f.name.charAt(0).toUpperCase(),
    experience: f.experience,
    languages: f.languages,
    category: f.category,
    photoUrl,
  });

  revalidatePublic();
  return { status: "success", message: `Updated ${f.name}.` };
}

export async function deletePersonAction(formData: FormData): Promise<void> {
  const ref = String(formData.get("ref") ?? "").trim();
  if (!ref) return;
  await deletePerson(ref);
  revalidatePublic();
}

export type CategoryState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"label", string>>;
};

export async function createCategoryAction(
  _prev: CategoryState,
  formData: FormData,
): Promise<CategoryState> {
  const label = String(formData.get("label") ?? "").trim();

  if (label.length < 2) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors: { label: "Please enter a category label." },
    };
  }

  const slug = slugify(label);
  const existing = await listCategories();
  if (existing.some((c) => c.slug === slug)) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors: { label: "A category with that slug already exists." },
    };
  }

  await addCategory({ slug, label });
  revalidatePublic();
  return { status: "success", message: `Added category "${label}".` };
}

export async function updateCategoryAction(
  _prev: CategoryState,
  formData: FormData,
): Promise<CategoryState> {
  const slug = String(formData.get("slug") ?? "").trim();
  const label = String(formData.get("label") ?? "").trim();

  if (!slug) {
    return {
      status: "error",
      message: "Missing category identifier.",
    };
  }
  if (label.length < 2) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors: { label: "Please enter a category label." },
    };
  }

  await updateCategory(slug, { label });
  revalidatePublic();
  return { status: "success", message: `Updated category "${label}".` };
}

export async function deleteCategoryAction(formData: FormData): Promise<void> {
  const slug = String(formData.get("slug") ?? "").trim();
  if (!slug) return;
  await deleteCategory(slug); // throws if in use — caught by Next error overlay
  revalidatePublic();
}
