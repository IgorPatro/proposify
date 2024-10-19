import { z } from "zod";

import { publicProcedure } from "../trpc";

export const validateVisitSession = publicProcedure
  .input(
    z.object({
      offerUuid: z.string().min(1),
      visitSessionUuid: z.string().optional(),
    }),
  )
  .query(async ({ ctx, input }) => {
    const visitSession = await ctx.db.visitSession.upsert({
      create: {
        offer: {
          connect: {
            uuid: input.offerUuid,
          },
        },
      },
      update: {
        updatedAt: new Date(),
      },
      where: { uuid: input.visitSessionUuid },
    });

    return visitSession;
  });
