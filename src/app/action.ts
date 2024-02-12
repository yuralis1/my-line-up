"use server";

import { revalidatePath } from "next/cache";
import { caller } from "@/lib/trpc";
import { action } from "@/lib/safe-action";
import z from "zod";

const schemaAddUser = z.void();

export const actionAddUser = action(schemaAddUser, async () => {
  await caller.createUser({ name: "Alice" });
  revalidatePath("/");
});

const schemaRemoveAllUsers = z.void();

export const actionRemoveAllUsers = action(schemaRemoveAllUsers, async () => {
  await caller.deleteAllUsers();
  revalidatePath("/");
});
