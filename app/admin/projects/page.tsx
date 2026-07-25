import Link from "next/link";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getProjects, removeProject, swapProjects, seedFromStatic } from "@/lib/admin/kv";
import { categories } from "@/lib/projects";
import ProjectFilter from "@/components/admin/ProjectFilter";

export default async function AdminProjectsPage() {
  const projects = await getProjects();

  const sortedCategories = [...new Set(categories)].sort();

  async function handleDelete(slug: string) {
    "use server";
    await removeProject(slug);
    revalidatePath("/admin/projects");
    revalidatePath("/projects");
    revalidatePath("/");
  }

  async function handleMoveUp(slug: string) {
    "use server";
    await swapProjects(slug, "up");
    revalidatePath("/admin/projects");
    revalidatePath("/projects");
    revalidatePath("/");
  }

  async function handleMoveDown(slug: string) {
    "use server";
    await swapProjects(slug, "down");
    revalidatePath("/admin/projects");
    revalidatePath("/projects");
    revalidatePath("/");
  }

  async function handleSeed() {
    "use server";
    await seedFromStatic();
    revalidatePath("/admin/projects");
    revalidatePath("/projects");
    revalidatePath("/");
    redirect("/admin/projects?msg=seeded");
  }

  return (
    <div className="p-8 max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-xl font-serif text-bark mb-1">Projects</h1>
          <p className="text-xs text-stone">{projects.length} total</p>
        </div>
        <div className="flex gap-3">
          <form action={handleSeed}>
            <button className="px-4 py-2 text-xs border border-sand text-stone rounded hover:bg-linen transition-colors">
              Seed from static
            </button>
          </form>
          <Link
            href="/admin/projects/new"
            className="px-4 py-2 text-xs bg-bark text-off-white rounded hover:bg-terracotta transition-colors"
          >
            + New project
          </Link>
        </div>
      </div>

      <ProjectFilter
        projects={projects}
        categories={sortedCategories}
        onDelete={handleDelete}
        onMoveUp={handleMoveUp}
        onMoveDown={handleMoveDown}
        onSeed={handleSeed}
      />
    </div>
  );
}
