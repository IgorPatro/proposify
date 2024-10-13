import { createTRPCRouter } from "../trpc";
import { getCompanyAssets } from "./get-company-assets";

export const assetRouter = createTRPCRouter({
  getCompanyAssets,
});
