import Link from "next/link";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getSession, destroySession } from "@/lib/admin/auth";

export const metadata = { title: "Admin — AD Design" };

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  if (!session) return <>{children}</>;

  async function logout() {
    "use server";
    await destroySession();
    revalidatePath("/admin");
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen flex font-sans text-sm">
      {/* Sidebar */}
      <aside className="w-52 bg-bark flex flex-col shrink-0 min-h-screen sticky top-0 h-screen">
        <div className="px-5 py-6 border-b border-white/10">
          <p className="text-[0.6rem] tracking-[0.2em] uppercase text-white/30 mb-1">AD Design</p>
          <p className="text-off-white text-lg font-serif">Admin</p>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-0.5">
          <Link
            href="/admin/projects"
            className="flex items-center px-3 py-2 rounded text-white/60 hover:text-off-white hover:bg-white/10 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/admin/users"
            className="flex items-center px-3 py-2 rounded text-white/60 hover:text-off-white hover:bg-white/10 transition-colors"
          >
            Users
          </Link>
        </nav>

        <div className="px-3 pb-6 pt-4 border-t border-white/10 space-y-1">
          <Link
            href="/"
            target="_blank"
            className="flex items-center px-3 py-2 text-xs text-white/30 hover:text-white/60 transition-colors"
          >
            View site ↗
          </Link>
          <p className="px-3 py-1 text-xs text-white/20 truncate">{session.username}</p>
          <form action={logout}>
            <button className="w-full text-left px-3 py-2 text-xs text-white/30 hover:text-terracotta transition-colors">
              Log out
            </button>
          </form>
        </div>
      </aside>

      {/* Content */}
      <div className="flex-1 bg-gray-50 overflow-auto">
        {children}
      </div>
    </div>
  );
}
