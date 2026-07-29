import { Suspense } from "react";
import { getSession } from "@/lib/admin/auth";
import { getProjects } from "@/lib/admin/kv";
import AdminSidebar from "@/components/admin/AdminSidebar";
import FlashMessage from "@/components/admin/FlashMessage";
import { actionLogout } from "./actions";

export const metadata = { title: "Admin — AD Design" };

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  if (!session) return <>{children}</>;

  const projects = await getProjects();

  return (
    <div className="min-h-screen flex font-sans text-sm">
      <AdminSidebar
        username={session.username}
        projectCount={projects.length}
        logout={actionLogout}
      />

      <div className="flex-1 bg-gray-50 overflow-auto">
        {children}
      </div>

      <Suspense fallback={null}>
        <FlashMessage />
      </Suspense>
    </div>
  );
}
