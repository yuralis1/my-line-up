import "server-only";
import { createCallerFactory } from "./setup";
import appRouter from "./router";

export const createCaller = createCallerFactory(appRouter);
export const caller = createCaller({});
export type AppRouter = typeof appRouter;
