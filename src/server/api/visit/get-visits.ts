import { z } from "zod";

import { publicProcedure } from "../trpc";

export const getVisits = publicProcedure
  .input(
    z.object({
      offerUuid: z.string().min(1),
    }),
  )
  .query(async ({ ctx, input }) => {
    const visits = await ctx.db.visit.findMany({
      where: {
        offer: {
          uuid: input.offerUuid,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return visits;
  });
