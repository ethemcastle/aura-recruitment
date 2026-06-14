import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { LoginForm } from "@/components/admin/LoginForm";

export const metadata = {
  title: "Sign in · Admin",
};

export default async function AdminLoginPage() {
  const session = await getSession();
  if (session) redirect("/admin");

  const hasCustomPassword = Boolean(process.env.ADMIN_PASSWORD);

  return (
    <div className="mx-auto flex max-w-md flex-col gap-8 py-10">
      <div>
        <div className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
          Aura Recruitment / Admin
        </div>
        <h1 className="font-display text-3xl tracking-tight">Sign in</h1>
        <p className="mt-2 text-sm text-zinc-500">
          Authorised staff only. Enter the admin password to manage the
          roster and categories.
        </p>
      </div>

      <LoginForm />

      {!hasCustomPassword && (
        <p className="border-t border-zinc-200 pt-5 text-xs text-zinc-500">
          Dev mode: no <code className="font-mono">ADMIN_PASSWORD</code> set —
          default password is <code className="font-mono">admin</code>.
        </p>
      )}
    </div>
  );
}
