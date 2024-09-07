import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";

import { authRouter } from "./routers/auth";
import { customerRouter } from "./routers/customer/customer";
import { offerRouter } from "./routers/offer/offer";
import { templateRouter } from "./routers/template";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  customer: customerRouter,
  offer: offerRouter,
  template: templateRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
