import { assetRouter } from "./asset";
import { authRouter } from "./auth";
import { customerRouter } from "./customer";
import { offerRouter } from "./offer";
import { templateRouter } from "./template";
import { createCallerFactory, createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  asset: assetRouter,
  auth: authRouter,
  customer: customerRouter,
  offer: offerRouter,
  template: templateRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
