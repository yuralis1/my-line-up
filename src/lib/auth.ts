import "server-only";
import type { NextAuthOptions } from "next-auth";
import TwitchProvider from "next-auth/providers/twitch";

export const options: NextAuthOptions = {
  providers: [
    TwitchProvider({
      clientId: process.env.TWITCH_CLIENT_ID,
      clientSecret: process.env.TWITCH_CLIENT_SECRET,
    }),
  ],
};
