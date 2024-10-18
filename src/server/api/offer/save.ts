import { z } from "zod";

import { BlockSchema } from "@/_blocks/types";

import { ThemeEnum } from "../resource/types";
import { protectedProcedure } from "../trpc";

const SaveOfferInputSchema = z.object({
  blocks: z.array(BlockSchema),
  logoUrl: z.string().nullish(),
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
        logoUrl: input.logoUrl,
        name: input.name,
        theme: input.theme,
      },
      where: { uuid: input.offerUuid },
    });
  });
