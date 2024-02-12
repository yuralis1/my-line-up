import prisma from "@/lib/prisma";
import { z } from "zod";
import { router, publicProcedure, privateProcedure } from "./setup";

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
  deleteAllUsers: privateProcedure.query(async () => {
    await prisma.user.deleteMany();
  }),
});

export default appRouter;
