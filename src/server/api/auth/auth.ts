import { createTRPCRouter } from "../trpc";

import { signUp } from "./signup";

export const authRouter = createTRPCRouter({
  signUp: signUp,
});
