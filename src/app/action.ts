"use server";

import { revalidatePath } from "next/cache";
import { caller } from "@/lib/trpc";

export async function addUser() {
  await caller.createUser({ name: "Alice" });
  revalidatePath("/");
}

export async function removeAllUsers() {
  await caller.deleteAllUsers();
  revalidatePath("/");
}
