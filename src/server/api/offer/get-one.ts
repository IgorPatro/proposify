import { z } from "zod";

import { publicProcedure } from "../trpc";
import { ResourceSchema } from "../resource/types";

export const getOne = publicProcedure
  .input(z.object({ offerUuid: z.string().min(1) }))
  .query(async ({ ctx, input }) => {
    const offer = await ctx.db.offer.findUnique({
      where: { uuid: input.offerUuid },
    });

    if (!offer) {
      throw new Error("Offer not found");
    }

    return ResourceSchema.parse(offer);
  });
