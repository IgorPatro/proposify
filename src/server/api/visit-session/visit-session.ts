import { createTRPCRouter } from "../trpc";

import { validateVisitSession } from "./validate-visit-session";

export const visitSessionRouter = createTRPCRouter({
  validateVisitSession,
});
