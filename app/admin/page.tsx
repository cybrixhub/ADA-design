import Image from "next/image";
import Link from "next/link";
import { FolderKanban, Users, Tag, Plus, ArrowRight } from "lucide-react";
import { getProjects, getUsers } from "@/lib/admin/kv";

export default async function AdminDashboard() {
  const [projects, users] = await Promise.all([getProjects(), getUsers()]);

  const uniqueCategories = [...new Set(projects.map((p) => p.category))];
  const categoryBreakdown = uniqueCategories
    .map((cat) => ({
      name: cat,
      count: projects.filter((p) => p.category === cat).length,
    }))
    .sort((a, b) => b.count - a.count);

  const recentProjects = projects.slice(0, 6);

  return (
    <div className="p-8 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-xl font-serif text-bark">Dashboard</h1>
        <p className="text-xs text-stone mt-1">AD Design project portfolio</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <StatCard
          icon={<FolderKanban size={17} />}
          label="Total Projects"
          value={projects.length}
          href="/admin/projects"
        />
        <StatCard
          icon={<Tag size={17} />}
          label="Categories"
          value={uniqueCategories.length}
        />
        <StatCard
          icon={<Users size={17} />}
          label="Admin Users"
          value={users.length || "env"}
          href="/admin/users"
        />
      </div>

      <div className="grid grid-cols-5 gap-6">
        {/* Recent projects */}
        <div className="col-span-3">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[0.65rem] tracking-widest uppercase text-stone">
              Recent projects
            </h2>
            <Link
              href="/admin/projects"
              className="text-xs text-terracotta hover:underline flex items-center gap-1"
            >
              View all <ArrowRight size={11} />
            </Link>
          </div>

          <div className="bg-white rounded-lg border border-linen overflow-hidden">
            {recentProjects.length === 0 ? (
              <div className="p-8 text-center text-stone text-sm">
                No projects yet.{" "}
                <Link href="/admin/projects" className="text-terracotta hover:underline">
                  Add one
                </Link>
              </div>
            ) : (
              recentProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/admin/projects/${p.slug}`}
                  className="flex items-center gap-3 px-4 py-3 border-b border-linen last:border-0 hover:bg-gray-50 transition-colors"
                >
                  <div className="relative w-10 h-8 shrink-0 bg-linen rounded overflow-hidden">
                    {p.images[0] && (
                      <Image
                        src={p.images[0]}
                        alt={p.title}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-bark text-sm font-medium truncate">{p.title}</p>
                    <p className="text-stone text-xs truncate">{p.category}</p>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>

        {/* Right column */}
        <div className="col-span-2 space-y-6">
          {/* Category breakdown */}
          <div>
            <h2 className="text-[0.65rem] tracking-widest uppercase text-stone mb-4">
              By category
            </h2>
            {categoryBreakdown.length === 0 ? (
              <div className="bg-white rounded-lg border border-linen p-6 text-center text-stone text-sm">
                No data yet
              </div>
            ) : (
              <div className="bg-white rounded-lg border border-linen p-4 space-y-3">
                {categoryBreakdown.map((c) => (
                  <div key={c.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-bark truncate">{c.name}</span>
                      <span className="text-xs text-stone shrink-0 ml-2">{c.count}</span>
                    </div>
                    <div className="h-1 bg-linen rounded-full overflow-hidden">
                      <div
                        className="h-full bg-terracotta/60 rounded-full transition-all"
                        style={{ width: `${(c.count / projects.length) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick actions */}
          <div>
            <h2 className="text-[0.65rem] tracking-widest uppercase text-stone mb-4">
              Quick actions
            </h2>
            <div className="space-y-2">
              <Link
                href="/admin/projects/new"
                className="flex items-center gap-2 px-4 py-3 bg-bark text-off-white rounded-lg text-sm hover:bg-terracotta transition-colors"
              >
                <Plus size={14} />
                New project
              </Link>
              <Link
                href="/admin/users"
                className="flex items-center gap-2 px-4 py-3 bg-white border border-linen text-stone rounded-lg text-sm hover:bg-gray-50 transition-colors"
              >
                <Users size={14} />
                Manage users
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: number | string;
  href?: string;
}) {
  const inner = (
    <div className="bg-white rounded-lg border border-linen p-5 hover:border-sand transition-colors h-full">
      <div className="text-stone mb-3">{icon}</div>
      <p className="font-serif text-2xl text-bark">{value}</p>
      <p className="text-xs text-stone mt-0.5">{label}</p>
    </div>
  );
  if (href) return <Link href={href} className="block">{inner}</Link>;
  return inner;
}
