import { Suspense } from "react";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getSession, destroySession } from "@/lib/admin/auth";
import { getProjects } from "@/lib/admin/kv";
import AdminSidebar from "@/components/admin/AdminSidebar";
import FlashMessage from "@/components/admin/FlashMessage";

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

  const projects = await getProjects();

  return (
    <div className="min-h-screen flex font-sans text-sm">
      <AdminSidebar
        username={session.username}
        projectCount={projects.length}
        logout={logout}
      />

      <div className="flex-1 bg-gray-50 overflow-auto">
        {children}
      </div>

      <Suspense>
        <FlashMessage />
      </Suspense>
    </div>
  );
}
