import { createTRPCRouter } from "@/server/api/trpc";

import { createOffer } from "./create-offer";

export const offerRouter = createTRPCRouter({
  createOffer,
});
