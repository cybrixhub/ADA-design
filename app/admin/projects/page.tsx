import Link from "next/link";
import { getProjects } from "@/lib/admin/kv";
import { categories } from "@/lib/projects";
import ProjectFilter from "@/components/admin/ProjectFilter";
import { actionDelete, actionMoveUp, actionMoveDown, actionSeed } from "./actions";

export default async function AdminProjectsPage() {
  const projects = await getProjects();
  const sortedCategories = [...new Set(categories)].sort();

  return (
    <div className="p-8 max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-xl font-serif text-bark mb-1">Projects</h1>
          <p className="text-xs text-stone">{projects.length} total</p>
        </div>
        <div className="flex gap-3">
          <form action={actionSeed}>
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
        onDelete={actionDelete}
        onMoveUp={actionMoveUp}
        onMoveDown={actionMoveDown}
        onSeed={actionSeed}
      />
    </div>
  );
}
