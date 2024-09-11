import { z } from "zod";

import { BlockSchema } from "@/_blocks/types";

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

    return {
      blocks,
      name: template.name,
      theme: template.theme,
      uuid: template.uuid,
    };
  });
