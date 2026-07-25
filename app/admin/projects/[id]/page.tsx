import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getProjectBySlug, upsertProject, removeProject } from "@/lib/admin/kv";
import { categories } from "@/lib/projects";
import ImageManager from "@/components/admin/ImageManager";
import DeleteButton from "@/components/admin/DeleteButton";

type Props = { params: Promise<{ id: string }> };

export default async function EditProjectPage({ params }: Props) {
  const { id } = await params;
  const projectData = await getProjectBySlug(id);
  if (!projectData) notFound();
  const project = projectData!;

  async function save(formData: FormData) {
    "use server";
    const images = formData.getAll("images") as string[];
    await upsertProject({
      slug: project.slug,
      title: formData.get("title") as string,
      address: formData.get("address") as string,
      category: formData.get("category") as string,
      description: formData.get("description") as string,
      images,
    });
    revalidatePath("/admin/projects");
    revalidatePath(`/projects/${project.slug}`);
    revalidatePath("/projects");
    revalidatePath("/");
    redirect("/admin/projects");
  }

  async function handleDelete() {
    "use server";
    await removeProject(project.slug);
    revalidatePath("/admin/projects");
    revalidatePath("/projects");
    revalidatePath("/");
    redirect("/admin/projects");
  }

  const sortedCategories = [...new Set(categories)].sort();

  return (
    <div className="p-8 max-w-2xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link href="/admin/projects" className="text-xs text-stone hover:text-bark transition-colors">
            ← Back to projects
          </Link>
          <h1 className="font-serif text-xl text-bark mt-3">Edit project</h1>
          <p className="text-xs text-stone mt-1 font-mono">{project.slug}</p>
        </div>
        <DeleteButton
          action={handleDelete}
          label="Delete project"
          confirm={`Permanently delete "${project.title}"?`}
        />
      </div>

      <form action={save} className="space-y-7">
        <Field label="Title" name="title" defaultValue={project.title} required />
        <Field label="Address" name="address" defaultValue={project.address} required />

        <div className="space-y-1.5">
          <label className="block text-[0.65rem] tracking-widest uppercase text-stone">
            Category <span className="text-terracotta">*</span>
          </label>
          <select
            name="category"
            required
            defaultValue={project.category}
            className="w-full bg-white border border-linen rounded px-3 py-2.5 text-bark text-sm focus:border-bark outline-none transition-colors"
          >
            {sortedCategories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="block text-[0.65rem] tracking-widest uppercase text-stone">Description</label>
          <textarea
            name="description"
            rows={8}
            defaultValue={project.description}
            className="w-full bg-white border border-linen rounded px-3 py-2.5 text-bark text-sm font-light resize-none focus:border-bark outline-none transition-colors"
          />
        </div>

        <div className="space-y-3">
          <label className="block text-[0.65rem] tracking-widest uppercase text-stone">
            Images
            <span className="ml-2 text-stone/50 normal-case tracking-normal font-normal">
              Hover an image to reorder or remove
            </span>
          </label>
          <ImageManager initialImages={project.images} />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="px-6 py-2.5 bg-bark text-off-white text-xs tracking-widest uppercase rounded hover:bg-terracotta transition-colors"
          >
            Save changes
          </button>
          <Link
            href="/admin/projects"
            className="px-6 py-2.5 border border-sand text-stone text-xs tracking-widest uppercase rounded hover:bg-linen transition-colors"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  required,
  defaultValue = "",
}: {
  label: string;
  name: string;
  required?: boolean;
  defaultValue?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-[0.65rem] tracking-widest uppercase text-stone">
        {label} {required && <span className="text-terracotta">*</span>}
      </label>
      <input
        name={name}
        type="text"
        required={required}
        defaultValue={defaultValue}
        className="w-full bg-white border border-linen rounded px-3 py-2.5 text-bark text-sm font-light focus:border-bark outline-none transition-colors"
      />
    </div>
  );
}
