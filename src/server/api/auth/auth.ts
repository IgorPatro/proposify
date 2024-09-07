import { createTRPCRouter, publicProcedure } from "../procedures";
import { signUp } from "./signup";

export const authRouter = createTRPCRouter({
  signUp: signUp,
});
