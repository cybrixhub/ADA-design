"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { destroySession } from "@/lib/admin/auth";

export async function actionLogout() {
  await destroySession();
  revalidatePath("/admin");
  redirect("/admin/login");
}
