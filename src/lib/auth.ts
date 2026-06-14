import "server-only";
import crypto from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE = "aura_session";
const MAX_AGE_S = 60 * 60 * 24 * 7; // 7 days

const SECRET = process.env.SESSION_SECRET || "dev-only-secret-change-me";
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin";

function sign(payload: string): string {
  return crypto.createHmac("sha256", SECRET).update(payload).digest("hex");
}

function mint(): string {
  const payload = `admin:${Date.now()}`;
  return `${payload}.${sign(payload)}`;
}

function verify(token: string): boolean {
  const dot = token.lastIndexOf(".");
  if (dot < 0) return false;
  const payload = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const expected = sign(payload);
  if (expected.length !== sig.length) return false;
  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(sig));
}

export async function getSession(): Promise<{ admin: true } | null> {
  const jar = await cookies();
  const token = jar.get(COOKIE)?.value;
  if (!token) return null;
  return verify(token) ? { admin: true } : null;
}

export async function requireSession(): Promise<{ admin: true }> {
  const session = await getSession();
  if (!session) redirect("/admin/login");
  return session;
}

export async function signIn(password: string): Promise<boolean> {
  if (password !== ADMIN_PASSWORD) return false;
  const jar = await cookies();
  jar.set(COOKIE, mint(), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE_S,
    secure: process.env.NODE_ENV === "production",
  });
  return true;
}

export async function signOut(): Promise<void> {
  const jar = await cookies();
  jar.delete(COOKIE);
}
