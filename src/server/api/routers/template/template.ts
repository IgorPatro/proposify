import { createTRPCRouter } from "@/server/api/trpc";

import { createEmpty } from "./create-empty";
import { getAll } from "./get-all";
import { getOne } from "./get-one";
import { save } from "./save";

export const templateRouter = createTRPCRouter({
  createEmpty,
  getAll,
  getOne,
  save,
});
