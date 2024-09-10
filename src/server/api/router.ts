import { authRouter } from "./auth";
import { customerRouter } from "./customer";
import { offerRouter } from "./offer";
import { createCallerFactory, createTRPCRouter } from "./procedures";
import { templateRouter } from "./template";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  customer: customerRouter,
  offer: offerRouter,
  template: templateRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
