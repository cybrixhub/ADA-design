"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { removeProject, swapProjects, seedFromStatic } from "@/lib/admin/kv";

export async function actionDelete(slug: string) {
  await removeProject(slug);
  revalidatePath("/admin/projects");
  revalidatePath("/projects");
  revalidatePath("/");
}

export async function actionMoveUp(slug: string) {
  await swapProjects(slug, "up");
  revalidatePath("/admin/projects");
  revalidatePath("/projects");
  revalidatePath("/");
}

export async function actionMoveDown(slug: string) {
  await swapProjects(slug, "down");
  revalidatePath("/admin/projects");
  revalidatePath("/projects");
  revalidatePath("/");
}

export async function actionSeed() {
  await seedFromStatic();
  revalidatePath("/admin/projects");
  revalidatePath("/projects");
  revalidatePath("/");
  redirect("/admin/projects?msg=seeded");
}
