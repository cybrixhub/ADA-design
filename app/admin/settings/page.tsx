import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getSettings, saveSettings, getProjects } from "@/lib/admin/kv";

export default async function SettingsPage() {
  const [settings, projects] = await Promise.all([getSettings(), getProjects()]);

  const slugList = projects.map((p) => p.slug);

  async function save(formData: FormData) {
    "use server";
    const heroRaw = formData.get("heroSlugs") as string;
    const heroSlugs = heroRaw
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);

    await saveSettings({
      heroSlugs,
      contactEmail: (formData.get("contactEmail") as string).trim(),
    });

    revalidatePath("/");
    redirect("/admin/settings?msg=settings_saved");
  }

  return (
    <div className="p-8 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-xl font-serif text-bark mb-1">Settings</h1>
        <p className="text-xs text-stone">Configure site-wide options.</p>
      </div>

      <form action={save} className="space-y-8">
        {/* Hero slugs */}
        <div className="bg-white rounded-lg border border-linen p-6 space-y-5">
          <div>
            <h2 className="font-serif text-base text-bark mb-1">Hero slideshow</h2>
            <p className="text-xs text-stone">
              One project slug per line. These appear as the rotating hero images on the homepage.
              Leave empty to use the default hardcoded slugs.
            </p>
          </div>

          <div className="space-y-1.5">
            <label className="block text-[0.65rem] tracking-widest uppercase text-stone">
              Project slugs
            </label>
            <textarea
              name="heroSlugs"
              rows={6}
              defaultValue={settings.heroSlugs.join("\n")}
              placeholder={"44-kidd-circuit-goulburn-nsw-2580\n12-dexter-road-lochinvar-nsw-2321"}
              spellCheck={false}
              className="w-full bg-transparent border border-linen rounded px-3 py-2.5 text-bark text-xs font-mono resize-none focus:border-bark outline-none transition-colors placeholder:text-stone/30"
            />
          </div>

          {slugList.length > 0 && (
            <div className="space-y-1.5">
              <p className="text-[0.65rem] tracking-widest uppercase text-stone">
                Available slugs
              </p>
              <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto">
                {slugList.map((s) => (
                  <span
                    key={s}
                    className="text-[0.65rem] font-mono bg-linen text-stone/70 px-2 py-1 rounded cursor-default select-all"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Contact */}
        <div className="bg-white rounded-lg border border-linen p-6 space-y-5">
          <div>
            <h2 className="font-serif text-base text-bark mb-1">Contact</h2>
            <p className="text-xs text-stone">
              Admin contact email — used for internal notifications only, not shown publicly.
            </p>
          </div>

          <div className="space-y-1.5">
            <label className="block text-[0.65rem] tracking-widest uppercase text-stone">
              Email
            </label>
            <input
              name="contactEmail"
              type="email"
              defaultValue={settings.contactEmail}
              placeholder="admin@adadesign.com.au"
              className="w-full bg-transparent border-b border-linen focus:border-bark outline-none py-2.5 text-bark text-sm font-light transition-colors placeholder:text-stone/30"
            />
          </div>
        </div>

        <button
          type="submit"
          className="px-6 py-2.5 bg-bark text-off-white text-xs tracking-widest uppercase rounded hover:bg-terracotta transition-colors"
        >
          Save settings
        </button>
      </form>
    </div>
  );
}
