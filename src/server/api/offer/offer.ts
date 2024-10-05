import { createTRPCRouter } from "../trpc";

import { createOffer } from "./create-offer";
import { getAllOffersMinified } from "./get-all-offers-minified";
import { save } from "./save";

export const offerRouter = createTRPCRouter({
  createOffer,
  getAll: getAllOffersMinified,
  save,
});
