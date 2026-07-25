import Image from "next/image";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getProjects, removeProject, swapProjects, seedFromStatic } from "@/lib/admin/kv";
import DeleteButton from "@/components/admin/DeleteButton";

export default async function AdminProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ seeded?: string }>;
}) {
  const projects = await getProjects();
  const { seeded } = await searchParams;

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
    const count = await seedFromStatic();
    revalidatePath("/admin/projects");
    revalidatePath("/projects");
    revalidatePath("/");
    redirect(`/admin/projects?seeded=${count}`);
  }

  return (
    <div className="p-8 max-w-5xl">
      {seeded && (
        <div className="mb-6 px-4 py-3 bg-sage/10 border border-sage/20 rounded text-sm text-bark">
          Seeded {seeded} projects from static data.
        </div>
      )}

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-xl font-serif text-bark mb-1">Projects</h1>
          <p className="text-xs text-stone">{projects.length} total</p>
        </div>
        <div className="flex gap-3">
          <form action={handleSeed}>
            <button className="px-4 py-2 text-xs border border-sand text-stone rounded hover:bg-linen transition-colors">
              Seed from static data
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

      <div className="bg-white rounded-lg border border-linen overflow-hidden">
        {projects.length === 0 ? (
          <div className="p-16 text-center">
            <p className="text-stone mb-4">No projects in the database yet.</p>
            <form action={handleSeed}>
              <button className="text-terracotta underline text-sm">
                Import all {/* will show count from static */} projects from static data
              </button>
            </form>
          </div>
        ) : (
          projects.map((project, i) => (
            <div
              key={project.slug}
              className="flex items-center gap-4 px-4 py-3 border-b border-linen last:border-0 hover:bg-gray-50 transition-colors"
            >
              {/* Thumbnail */}
              <div className="relative w-16 h-11 shrink-0 bg-linen rounded overflow-hidden">
                {project.images[0] && (
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="font-medium text-bark text-sm truncate">{project.title}</p>
                <p className="text-xs text-stone truncate">
                  {project.category} · {project.address}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1 shrink-0">
                <form action={handleMoveUp.bind(null, project.slug)}>
                  <button
                    disabled={i === 0}
                    title="Move up"
                    className="p-1.5 text-stone hover:text-bark disabled:opacity-20 transition-colors text-base leading-none"
                  >
                    ↑
                  </button>
                </form>
                <form action={handleMoveDown.bind(null, project.slug)}>
                  <button
                    disabled={i === projects.length - 1}
                    title="Move down"
                    className="p-1.5 text-stone hover:text-bark disabled:opacity-20 transition-colors text-base leading-none"
                  >
                    ↓
                  </button>
                </form>

                <Link
                  href={`/admin/projects/${project.slug}`}
                  className="ml-2 px-3 py-1.5 text-xs border border-sand text-stone rounded hover:bg-linen transition-colors"
                >
                  Edit
                </Link>

                <DeleteButton
                  action={handleDelete.bind(null, project.slug)}
                  confirm={`Delete "${project.title}"?`}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
