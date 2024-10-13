import { z } from "zod";

import { BlockSchema } from "@/_blocks/types";

import { protectedProcedure } from "../trpc";
import { ThemeEnum } from "../resource/types";

const SaveOfferInputSchema = z.object({
  blocks: z.array(BlockSchema),
  name: z.string().min(1),
  offerUuid: z.string().min(1),
  theme: ThemeEnum,
  logoUrl: z.string().nullish(),
});

export const save = protectedProcedure
  .input(SaveOfferInputSchema)
  .mutation(async ({ ctx, input }) => {
    return ctx.db.offer.update({
      data: {
        blocks: input.blocks,
        name: input.name,
        theme: input.theme,
        logoUrl: input.logoUrl,
      },
      where: { uuid: input.offerUuid },
    });
  });
