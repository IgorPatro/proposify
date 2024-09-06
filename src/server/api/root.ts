import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";

import { authRouter } from "./routers/auth";
import { templateRouter } from "./routers/template";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  // company: companyRouter,
  template: templateRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
