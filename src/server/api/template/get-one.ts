import { z } from "zod";

import { ResourceSchema } from "../resource/types";
import { publicProcedure } from "../trpc";

export const getOne = publicProcedure
  .input(z.object({ templateUuid: z.string().min(1) }))
  .query(async ({ ctx, input }) => {
    const template = await ctx.db.template.findUnique({
      where: { uuid: input.templateUuid },
    });

    if (!template) {
      throw new Error("Template not found");
    }

    return ResourceSchema.parse(template);
  });
