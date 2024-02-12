import { getServerSession } from "next-auth";
import { options } from "@/lib/auth";
export async function getUser() {
  const session = await getServerSession(options);
  if (!session) return null;
  return session.user;
}
