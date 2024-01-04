import { UserComponent } from "@/components/UserComponent";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

async function addUser() {
  "use server";
  await prisma.user.create({
    data: {
      name: "Alice",
    },
  });
  revalidatePath("/");
}

async function removeAllUsers() {
  "use server";
  await prisma.user.deleteMany();
  revalidatePath("/");
}
export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className="text-4xl font-bold">Hello World!</h1>
      <UserComponent
        users={users}
        addUser={addUser}
        removeAllUsers={removeAllUsers}
      />
    </main>
  );
}
