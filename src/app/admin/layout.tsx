import Image from "next/image";
import Link from "next/link";
import { signOutAction } from "@/app/admin/actions";
import { getSession } from "@/lib/auth";

const navItems = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/people", label: "People" },
  { href: "/admin/categories", label: "Categories" },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  return (
    <div className="admin-shell min-h-screen bg-white text-zinc-900">
      {/* Hide the editorial film-grain overlay inside the admin */}
      <style>{`body::before{display:none !important;}`}</style>

      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-zinc-900"
            >
              <Image
                src="/aura-logo.png"
                alt="Aura Consulting"
                width={36}
                height={36}
                className="size-9 object-contain"
                priority
              />
              <span className="font-display text-lg tracking-tight">
                Aura Consulting
              </span>
              <span className="ml-1 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400">
                / admin
              </span>
            </Link>
            {session && (
              <nav className="hidden items-center gap-6 md:flex">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            )}
          </div>

          {session && (
            <form action={signOutAction}>
              <button
                type="submit"
                className="rounded-md border border-zinc-200 px-3 py-1.5 text-sm text-zinc-700 hover:border-zinc-400 hover:bg-zinc-50"
              >
                Sign out
              </button>
            </form>
          )}
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-10">{children}</main>
    </div>
  );
}
