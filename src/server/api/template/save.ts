import { z } from "zod";

import { BlockSchema } from "@/_blocks/types";

import { ThemeEnum } from "../resource/types";
import { protectedProcedure } from "../trpc";

const SaveTemplateInputSchema = z.object({
  blocks: z.array(BlockSchema),
  logoUrl: z.string().nullish(),
  name: z.string().min(1),
  templateUuid: z.string().min(1),
  theme: ThemeEnum,
});

export const save = protectedProcedure
  .input(SaveTemplateInputSchema)
  .mutation(async ({ ctx, input }) => {
    console.log(input);

    return ctx.db.template.update({
      data: {
        blocks: input.blocks,
        logoUrl: input.logoUrl,
        name: input.name,
        theme: input.theme,
      },
      where: { uuid: input.templateUuid },
    });
  });
