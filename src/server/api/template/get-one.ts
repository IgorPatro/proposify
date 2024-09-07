import { z } from "zod";

import { BlockSchema } from "@/_blocks/types";

import { ThemeSchema } from "./types";
import { publicProcedure } from "../procedures";

export const getOne = publicProcedure
  .input(z.object({ templateUuid: z.string().min(1) }))
  .query(async ({ ctx, input }) => {
    const template = await ctx.db.template.findUnique({
      where: { uuid: input.templateUuid },
    });

    if (!template) {
      throw new Error("Template not found");
    }

    const blocks = z.array(BlockSchema).parse(template.blocks);
    const theme = ThemeSchema.parse(template.theme);

    return {
      blocks,
      name: template.name,
      theme,
      uuid: template.uuid,
    };
  });
