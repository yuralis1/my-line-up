import { UserComponent } from "@/components/UserComponent";
import { caller } from "@/lib/trpc";
import { auth } from "@/lib/auth";
import { WrapSignIn, WrapSignOut } from "@/components/auth/Wrappers";

export default async function Home() {
  const user = await auth();
  const isLoggedIn = user !== null;
  const users = await caller.getAllUsers();
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className="text-4xl font-bold">Hello World!</h1>
      <UserComponent users={users} isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <WrapSignOut>
          <button>Sign out</button>
        </WrapSignOut>
      ) : (
        <WrapSignIn>
          <button>Sign in</button>
        </WrapSignIn>
      )}
    </main>
  );
}
