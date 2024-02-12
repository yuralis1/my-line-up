import { UserComponent } from "@/components/UserComponent";
import { addUser, removeAllUsers } from "./action";
import { caller } from "@/lib/trpc";

export default async function Home() {
  const users = await caller.getAllUsers();

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
