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
    if (!input.visitSessionUuid) {
      const newVisitSession = await ctx.db.visitSession.create({
        data: {
          offer: {
            connect: {
              uuid: input.offerUuid,
            },
          },
        },
      });

      return newVisitSession;
    }

    const existingVisitSession = await ctx.db.visitSession.upsert({
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

    return existingVisitSession;
  });
