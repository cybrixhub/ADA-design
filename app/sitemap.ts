import type { MetadataRoute } from "next";
import { getProjects } from "@/lib/admin/kv";
import { services } from "@/lib/services";
import { absoluteUrl } from "@/lib/site";

// Regenerate hourly so projects added in the admin panel appear without a redeploy.
export const revalidate = 3600;

// Indexable pages only. Admin routes, /api and /maintenance (noindex) are excluded.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: absoluteUrl("/projects"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/services"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/about"), lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: absoluteUrl("/contact"), lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: absoluteUrl(`/services/${s.slug}`),
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  // Same data source as /projects/[slug], so every listed URL resolves.
  const projects = await getProjects();
  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: absoluteUrl(`/projects/${p.slug}`),
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  // De-duplicate defensively (e.g. a repeated project slug in the admin data).
  const seen = new Set<string>();
  return [...staticPages, ...servicePages, ...projectPages].filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}
