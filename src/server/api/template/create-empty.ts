import { type z } from "zod";

import { HERO_ONE_FIELDS_CONFIG } from "@/_blocks/hero/hero-one/config";
import { BlockNameEnum } from "@/_blocks/types";

import { protectedProcedure } from "../trpc";

import { type Template, TemplateSchema } from "./types";

export const CreateTemplateInputSchema = TemplateSchema.pick({
  name: true,
});

export type CreateTemplateInput = z.infer<typeof CreateTemplateInputSchema>;

// TODO: Make sure to delete unused templates after some time
export const createEmpty = protectedProcedure
  .input(CreateTemplateInputSchema)
  .mutation(async ({ ctx, input }) => {
    if (!ctx.session) {
      throw new Error("User does not have a company");
    }

    const company = await ctx.db.user.findUnique({
      select: {
        companyId: true,
      },
      where: {
        email: ctx.session.user.email,
      },
    });

    if (!company?.companyId) {
      throw new Error("User does not have a company");
    }

    const emptyTemplate = await ctx.db.template.create({
      data: {
        ...DEFAULT_EMPTY_TEMPLATE,
        company: {
          connect: {
            id: company.companyId,
          },
        },
        name: input.name,
      },
    });

    return {
      name: emptyTemplate.name,
      uuid: emptyTemplate.uuid,
    };
  });

export const DEFAULT_EMPTY_TEMPLATE: Template = {
  blocks: [
    {
      fields: HERO_ONE_FIELDS_CONFIG,
      name: BlockNameEnum.Values.hero_one,
      uuid: "dummy-uuid-hero-one",
    },
  ],
  name: "dummy-name-to-replace",
  theme: "light",
};
