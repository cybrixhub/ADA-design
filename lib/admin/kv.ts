import { Redis } from "@upstash/redis";
import { projects as staticProjects } from "@/lib/projects";
import type { Project } from "@/lib/projects";

function redis(): Redis | null {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) return null;
  return new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
}

const KEY = "ada:projects";
const USERS_KEY = "ada:users";

export async function getProjects(): Promise<Project[]> {
  const r = redis();
  if (!r) return staticProjects;
  try {
    const data = await r.get<Project[]>(KEY);
    if (Array.isArray(data) && data.length > 0) return data;
  } catch {}
  return staticProjects;
}

export async function saveProjects(list: Project[]) {
  const r = redis();
  if (!r) throw new Error("Redis not configured. Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN.");
  await r.set(KEY, list);
}

export async function getProjectBySlug(slug: string) {
  return (await getProjects()).find((p) => p.slug === slug) ?? null;
}

export async function upsertProject(project: Project) {
  const all = await getProjects();
  const idx = all.findIndex((p) => p.slug === project.slug);
  if (idx >= 0) all[idx] = project;
  else all.push(project);
  await saveProjects(all);
}

export async function removeProject(slug: string) {
  const all = await getProjects();
  await saveProjects(all.filter((p) => p.slug !== slug));
}

export async function swapProjects(slug: string, direction: "up" | "down") {
  const all = await getProjects();
  const idx = all.findIndex((p) => p.slug === slug);
  const target = direction === "up" ? idx - 1 : idx + 1;
  if (idx < 0 || target < 0 || target >= all.length) return;
  [all[idx], all[target]] = [all[target], all[idx]];
  await saveProjects(all);
}

export async function seedFromStatic() {
  await saveProjects(staticProjects);
  return staticProjects.length;
}

// ── Users ─────────────────────────────────────────────────────────────────────

export async function validateCredentials(username: string, password: string): Promise<boolean> {
  if (
    process.env.ADMIN_DEFAULT_USER &&
    process.env.ADMIN_DEFAULT_PASSWORD &&
    username === process.env.ADMIN_DEFAULT_USER &&
    password === process.env.ADMIN_DEFAULT_PASSWORD
  ) return true;

  const hash = await getUserHash(username);
  if (!hash) return false;
  const { default: bcrypt } = await import("bcryptjs");
  return bcrypt.compare(password, hash);
}

export async function getUsers(): Promise<string[]> {
  const r = redis();
  if (!r) return [];
  try {
    const h = await r.hgetall<Record<string, string>>(USERS_KEY);
    return h ? Object.keys(h) : [];
  } catch {
    return [];
  }
}

async function getUserHash(username: string): Promise<string | null> {
  const r = redis();
  if (!r) return null;
  return r.hget<string>(USERS_KEY, username);
}

export async function createUser(username: string, password: string) {
  const r = redis();
  if (!r) throw new Error("Redis not configured");
  const { default: bcrypt } = await import("bcryptjs");
  const hash = await bcrypt.hash(password, 12);
  await r.hset(USERS_KEY, { [username]: hash });
}

export async function deleteUser(username: string) {
  const r = redis();
  if (!r) throw new Error("Redis not configured");
  await r.hdel(USERS_KEY, username);
}
