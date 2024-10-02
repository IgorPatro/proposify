import { z } from "zod";

import { BlockSchema } from "@/_blocks/types";

import { protectedProcedure } from "../procedures";
import { ThemeEnum } from "../template/types";

const SaveOfferInputSchema = z.object({
  blocks: z.array(BlockSchema),
  name: z.string().min(1),
  offerUuid: z.string().min(1),
  theme: ThemeEnum,
});

export const save = protectedProcedure
  .input(SaveOfferInputSchema)
  .mutation(async ({ ctx, input }) => {
    return ctx.db.offer.update({
      data: {
        blocks: input.blocks,
        name: input.name,
        theme: input.theme,
      },
      where: { uuid: input.offerUuid },
    });
  });
