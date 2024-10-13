import { z } from "zod";

import { BlockSchema } from "@/_blocks/types";

import { protectedProcedure } from "../trpc";
import { ThemeEnum } from "../resource/types";

const SaveTemplateInputSchema = z.object({
  blocks: z.array(BlockSchema),
  name: z.string().min(1),
  templateUuid: z.string().min(1),
  theme: ThemeEnum,
});

export const save = protectedProcedure
  .input(SaveTemplateInputSchema)
  .mutation(async ({ ctx, input }) => {
    return ctx.db.template.update({
      data: {
        blocks: input.blocks,
        name: input.name,
        theme: input.theme,
      },
      where: { uuid: input.templateUuid },
    });
  });
