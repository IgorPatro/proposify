import { createTRPCRouter } from "../trpc";

import { createOffer } from "./create-offer";
import { getAllOffersMinified } from "./get-all-offers-minified";
import { getOne } from "./get-one";
import { getTimeReport } from "./get-time-report";
import { save } from "./save";

export const offerRouter = createTRPCRouter({
  createOffer,
  getAll: getAllOffersMinified,
  getOne: getOne,
  getTimeReport: getTimeReport,
  save,
});
