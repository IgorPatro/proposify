import { createTRPCRouter } from "../trpc";
import { getVisits } from "./get-visits";

export const visitRouter = createTRPCRouter({
  getVisits,
});
