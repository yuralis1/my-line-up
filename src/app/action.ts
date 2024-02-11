"use server";

import { revalidatePath } from "next/cache";
import { caller } from "@/lib/trpc";

export async function addUser() {
  "use server";
  await caller.createUser({ name: "Alice" });
  revalidatePath("/");
}

export async function removeAllUsers() {
  "use server";
  await caller.deleteAllUsers();
  revalidatePath("/");
}
