"use client";
import { User } from "@prisma/client";

type UserComponentProps = {
  users: User[];
  addUser: () => void;
  removeAllUsers: () => void;
  isLoggedIn: boolean;
};

export function UserComponent({
  users,
  addUser,
  removeAllUsers,
  isLoggedIn,
}: UserComponentProps) {
  return (
    <div className="flex-col">
      <div className="flex justify-between w-80">
        <button onClick={() => addUser()}>Add user</button>
        <button disabled={!isLoggedIn} onClick={() => removeAllUsers()}>
          Remove all users
        </button>
      </div>
      {users.map((user) => (
        <div key={user.id} className="flex flex-col items-center">
          <h1 className="text-3xl font-bold">{user.name}</h1>
        </div>
      ))}
    </div>
  );
}
