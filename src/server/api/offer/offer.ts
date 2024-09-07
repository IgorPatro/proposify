import { createTRPCRouter } from "../procedures";
import { createOffer } from "./create-offer";

export const offerRouter = createTRPCRouter({
  createOffer,
});
