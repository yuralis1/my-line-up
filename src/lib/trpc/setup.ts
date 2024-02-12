import { TRPCError, initTRPC } from "@trpc/server";
import { getUser } from "@/data/user";

const t = initTRPC.create({
  isServer: true,
});

const middleware = t.middleware;

const isAuth = middleware(async (opts) => {
  const user = await getUser();
  if (user === null) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
    });
  }
  return opts.next({
    ctx: {
      userId: user.id,
      user: user,
    },
  });
});

export const router = t.router;
export const createCallerFactory = t.createCallerFactory;
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(isAuth);
