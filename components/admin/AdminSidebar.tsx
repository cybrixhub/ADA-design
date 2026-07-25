"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderKanban,
  Users,
  Settings,
  ExternalLink,
  LogOut,
} from "lucide-react";

interface Props {
  username: string;
  projectCount: number;
  logout: () => Promise<void>;
}

export default function AdminSidebar({ username, projectCount, logout }: Props) {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/admin") return pathname === "/admin";
    return pathname.startsWith(href);
  }

  function cls(href: string) {
    return `flex items-center gap-2.5 px-3 py-2 rounded text-sm transition-colors ${
      isActive(href)
        ? "bg-white/15 text-off-white"
        : "text-white/50 hover:text-white/80 hover:bg-white/8"
    }`;
  }

  return (
    <aside className="w-56 bg-bark flex flex-col shrink-0 min-h-screen sticky top-0 h-screen">
      <div className="px-5 py-6 border-b border-white/10">
        <p className="text-[0.6rem] tracking-[0.2em] uppercase text-white/25 mb-1">
          AD Design
        </p>
        <p className="text-off-white font-serif text-base leading-tight">Admin Panel</p>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-0.5">
        <Link href="/admin" className={cls("/admin")}>
          <LayoutDashboard size={15} />
          Dashboard
        </Link>

        <Link href="/admin/projects" className={cls("/admin/projects")}>
          <FolderKanban size={15} />
          <span className="flex-1">Projects</span>
          <span className="text-[0.6rem] bg-white/10 text-white/40 px-1.5 py-0.5 rounded font-mono">
            {projectCount}
          </span>
        </Link>

        <Link href="/admin/users" className={cls("/admin/users")}>
          <Users size={15} />
          Users
        </Link>

        <Link href="/admin/settings" className={cls("/admin/settings")}>
          <Settings size={15} />
          Settings
        </Link>
      </nav>

      <div className="px-3 pb-5 pt-3 border-t border-white/10 space-y-0.5">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-2 px-3 py-2 text-xs text-white/30 hover:text-white/60 transition-colors"
        >
          <ExternalLink size={13} />
          View site
        </Link>

        <div className="flex items-center gap-2 px-3 py-2">
          <div className="w-5 h-5 rounded-full bg-terracotta/40 flex items-center justify-center text-[0.6rem] text-terracotta font-medium uppercase shrink-0">
            {username[0]}
          </div>
          <p className="text-xs text-white/35 truncate">{username}</p>
        </div>

        <form action={logout}>
          <button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-white/30 hover:text-terracotta transition-colors">
            <LogOut size={13} />
            Log out
          </button>
        </form>
      </div>
    </aside>
  );
}
