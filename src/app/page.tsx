import { UserComponent } from "@/components/UserComponent";
import { addUser, removeAllUsers } from "./action";
import prisma from "@/lib/prisma";

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
