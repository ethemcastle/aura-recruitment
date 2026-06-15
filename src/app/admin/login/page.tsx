import Image from "next/image";
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
    <div className="mx-auto flex max-w-md flex-col items-stretch gap-8 py-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <Image
          src="/aura-logo.png"
          alt="Aura Consulting"
          width={120}
          height={120}
          className="size-24 object-contain"
          priority
        />
        <div className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
          Aura Consulting / Admin
        </div>
        <h1 className="font-display text-3xl tracking-tight">Sign in</h1>
        <p className="max-w-xs text-sm text-zinc-500">
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
