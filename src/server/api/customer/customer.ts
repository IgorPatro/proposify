import { createTRPCRouter } from "../trpc";
import { createCustomer } from "./create-customer";
import { getAllCustomersMinified } from "./get-all-customers-minified";

export const customerRouter = createTRPCRouter({
  createCustomer,
  getAllCustomersMinified,
});
