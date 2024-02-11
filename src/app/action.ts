"use server";

import { revalidatePath } from "next/cache";
import { createCaller } from "@/lib/trpc";

export async function addUser() {
  "use server";
  createCaller({}).createUser({ name: "Alice" });
  revalidatePath("/");
}

export async function removeAllUsers() {
  "use server";
  createCaller({}).deleteAllUsers();
  revalidatePath("/");
}
