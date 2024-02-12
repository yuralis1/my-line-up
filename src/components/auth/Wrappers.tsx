"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { PropsWithChildren } from "react";

export const WrapSignIn = ({ children }: PropsWithChildren) => {
  return <div onClick={() => signIn()}>{children}</div>;
};

export const WrapRegister = ({ children }: PropsWithChildren) => {
  return <Link href="/register">{children}</Link>;
};

export const WrapSignOut = ({ children }: PropsWithChildren) => {
  return <div onClick={() => signOut()}>{children}</div>;
};
