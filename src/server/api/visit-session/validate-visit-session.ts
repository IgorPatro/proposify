import { z } from "zod";

import { publicProcedure } from "../trpc";

export const validateVisitSession = publicProcedure
  .input(z.object({ visitSessionUuid: z.string().min(1) }))
  .mutation(async ({ ctx, input }) => {
    const visitSession = await ctx.db.visitSession.findUnique({
      where: { uuid: input.visitSessionUuid },
    });

    if (!visitSession) {
      throw new Error("Template not found");
    }

    return visitSession;
  });
