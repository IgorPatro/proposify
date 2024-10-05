import { z } from "zod";

import { publicProcedure } from "../trpc";

import { TemplateSchema } from "./types";

export const getOne = publicProcedure
  .input(z.object({ templateUuid: z.string().min(1) }))
  .query(async ({ ctx, input }) => {
    const template = await ctx.db.template.findUnique({
      where: { uuid: input.templateUuid },
    });

    if (!template) {
      throw new Error("Template not found");
    }

    return TemplateSchema.parse(template);
  });
