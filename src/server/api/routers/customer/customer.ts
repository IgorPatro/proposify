import { createTRPCRouter } from "@/server/api/trpc";

import { getAllCustomersMinified } from "./get-all-customers-minified";

export const customerRouter = createTRPCRouter({
  getAllCustomersMinified,
});
