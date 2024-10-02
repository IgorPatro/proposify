import { createTRPCRouter } from "../procedures";

import { createOffer } from "./create-offer";
import { save } from "./save";

export const offerRouter = createTRPCRouter({
  createOffer,
  save,
});
