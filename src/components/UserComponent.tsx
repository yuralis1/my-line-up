"use client";
import { User } from "@prisma/client";
import { actionAddUser, actionRemoveAllUsers } from "@/app/action";
import { useAction } from "next-safe-action/hooks";
type UserComponentProps = {
  users: User[];
  isLoggedIn: boolean;
};

export function UserComponent({ users, isLoggedIn }: UserComponentProps) {
  const addUser = useAction(actionAddUser);
  const removeAllUsers = useAction(actionRemoveAllUsers);
  return (
    <div className="flex-col">
      <div className="flex justify-between w-80">
        {addUser.status === "executing" ? (
          <div>Loading</div>
        ) : (
          <button onClick={() => addUser.execute()}>Add user</button>
        )}
        {removeAllUsers.status === "executing" ? (
          <div>Loading</div>
        ) : (
          <button
            disabled={!isLoggedIn}
            onClick={() => removeAllUsers.execute()}
          >
            Remove all users
          </button>
        )}
      </div>
      {users.map((user) => (
        <div key={user.id} className="flex flex-col items-center">
          <h1 className="text-3xl font-bold">{user.name}</h1>
        </div>
      ))}
    </div>
  );
}
