import "server-only";
import { auth } from "@/lib/auth";

export async function getUser() {
  const session = await auth();
  if (!session) return null;
  return session.user;
}
