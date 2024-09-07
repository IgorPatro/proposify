import bcrypt from "bcryptjs";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

import { SignupRequestBodySchema } from "./type";

export const authRouter = createTRPCRouter({
  register: publicProcedure
    .input(SignupRequestBodySchema)
    .mutation(async ({ ctx, input }) => {
      const hashedPassword = await bcrypt.hash(input.password, 12);

      const user = await ctx.db.user.create({
        data: {
          email: input.email,
          firstName: input.firstName,
          lastName: input.lastName,
          password: hashedPassword,
        },
      });

      return { ...user, password: undefined };
    }),
});
