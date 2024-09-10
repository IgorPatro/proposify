import { createTRPCRouter } from "../procedures";

import { getAllCustomersMinified } from "./get-all-customers-minified";

export const customerRouter = createTRPCRouter({
  getAllCustomersMinified,
});
