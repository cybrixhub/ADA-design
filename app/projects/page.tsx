import { getProjects } from "@/lib/admin/kv";
import ProjectsClient from "./ProjectsClient";
import { absoluteUrl } from "@/lib/site";

// Canonical stays /projects even when filtered with ?category=…
export const metadata = {
  alternates: { canonical: absoluteUrl("/projects") },
};

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <ProjectsClient projects={projects} />;
}
