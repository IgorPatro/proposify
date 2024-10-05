import { createTRPCRouter } from "../trpc";

import { createEmpty } from "./create-empty";
import { getAllTemplatesMinified } from "./get-all-templates-minified";
import { getOne } from "./get-one";
import { save } from "./save";

export const templateRouter = createTRPCRouter({
  createEmpty,
  getAll: getAllTemplatesMinified,
  getOne,
  save,
});
