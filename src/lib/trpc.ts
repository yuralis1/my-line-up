import prisma from "@/lib/prisma";
import { z } from "zod";
import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

const { createCallerFactory, router } = t;
const publicProcedure = t.procedure;
const appRouter = router({
  createUser: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input }) => {
      await prisma.user.create({
        data: {
          name: input.name,
        },
      });
    }),
  deleteAllUsers: publicProcedure.query(async () => {
    await prisma.user.deleteMany();
  }),
});

export const createCaller = createCallerFactory(appRouter);
export const caller = createCaller({});
export type AppRouter = typeof appRouter;
