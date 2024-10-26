import { type z } from "zod";

import { HERO_SIMPLE_LEFT_FIELDS_CONFIG } from "@/_blocks/hero/hero-simple-left/config";
import { BlockNameEnum } from "@/_blocks/types";

import { type Resource, ResourceSchema } from "../resource/types";
import { protectedProcedure } from "../trpc";

export const CreateTemplateInputSchema = ResourceSchema.pick({
  name: true,
});

export type CreateTemplateInput = z.infer<typeof CreateTemplateInputSchema>;

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

// TODO: Add more advanced default template
export const DEFAULT_EMPTY_TEMPLATE: Omit<Resource, "uuid"> = {
  blocks: [
    {
      background: {
        alt: null,
        color: null,
        type: null,
        url: null,
      },
      fields: HERO_SIMPLE_LEFT_FIELDS_CONFIG,
      name: BlockNameEnum.Values.hero_simple_left,
      uuid: "dummy-uuid-hero-one",
    },
  ],
  name: "dummy-name-to-replace",
  theme: "light",
};
