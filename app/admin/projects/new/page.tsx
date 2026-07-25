import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { upsertProject } from "@/lib/admin/kv";
import { categories } from "@/lib/projects";
import ImageManager from "@/components/admin/ImageManager";

function slugify(address: string): string {
  return address
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function NewProjectPage() {
  async function save(formData: FormData) {
    "use server";
    const address = formData.get("address") as string;
    const images = formData.getAll("images") as string[];

    await upsertProject({
      slug: slugify(address),
      title: formData.get("title") as string,
      address,
      category: formData.get("category") as string,
      description: formData.get("description") as string,
      images,
    });

    revalidatePath("/admin/projects");
    revalidatePath("/projects");
    revalidatePath("/");
    redirect("/admin/projects");
  }

  const sortedCategories = [...new Set(categories)].sort();

  return (
    <div className="p-8 max-w-2xl">
      <div className="mb-8">
        <a href="/admin/projects" className="text-xs text-stone hover:text-bark transition-colors">
          ← Back to projects
        </a>
        <h1 className="font-serif text-xl text-bark mt-3">New project</h1>
      </div>

      <form action={save} className="space-y-7">
        <Field label="Title" name="title" required />
        <Field label="Address" name="address" required hint="Slug will be auto-generated from address" />

        <div className="space-y-1.5">
          <label className="block text-[0.65rem] tracking-widest uppercase text-stone">
            Category <span className="text-terracotta">*</span>
          </label>
          <select
            name="category"
            required
            defaultValue=""
            className="w-full bg-white border border-linen rounded px-3 py-2.5 text-bark text-sm focus:border-bark outline-none transition-colors"
          >
            <option value="" disabled>Select a category</option>
            {sortedCategories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="block text-[0.65rem] tracking-widest uppercase text-stone">Description</label>
          <textarea
            name="description"
            rows={6}
            className="w-full bg-white border border-linen rounded px-3 py-2.5 text-bark text-sm font-light resize-none focus:border-bark outline-none transition-colors"
          />
        </div>

        <div className="space-y-3">
          <label className="block text-[0.65rem] tracking-widest uppercase text-stone">Images</label>
          <ImageManager initialImages={[]} />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="px-6 py-2.5 bg-bark text-off-white text-xs tracking-widest uppercase rounded hover:bg-terracotta transition-colors"
          >
            Create project
          </button>
          <a
            href="/admin/projects"
            className="px-6 py-2.5 border border-sand text-stone text-xs tracking-widest uppercase rounded hover:bg-linen transition-colors"
          >
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  required,
  hint,
  defaultValue = "",
}: {
  label: string;
  name: string;
  required?: boolean;
  hint?: string;
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
      {hint && <p className="text-xs text-stone/60">{hint}</p>}
    </div>
  );
}
