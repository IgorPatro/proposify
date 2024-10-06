import { z } from "zod";

import { getFullyDataPropagatedBlocks } from "@/utils/offer";

import { protectedProcedure } from "../trpc";

export const CreateOfferInputSchema = z.object({
  customerUuid: z.string(),
  name: z.string(),
  templateUuid: z.string(),
});

export type CreateOfferInput = z.infer<typeof CreateOfferInputSchema>;

export const createOffer = protectedProcedure
  .input(CreateOfferInputSchema)
  .mutation(async ({ ctx, input }) => {
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

    const template = await ctx.db.template.findUnique({
      where: {
        uuid: input.templateUuid,
      },
    });

    if (!template || !template.blocks || !template.theme) {
      throw new Error("Template not found");
    }

    const customer = await ctx.db.customer.findUnique({
      where: {
        uuid: input.customerUuid,
      },
    });

    if (!customer) {
      throw new Error("Customer not found");
    }

    // We create an offer based on a template
    // However, at this stage we replace dynamic data
    // For example, customer data in the offer where there are variables
    // This data can then be manually changed by the user later
    const newOffer = await ctx.db.offer.create({
      data: {
        // TODO: For now this feature is disabled
        // blocks: await getFullyDataPropagatedBlocks(
        //   JSON.stringify(template.blocks),
        //   {
        //     customer,
        //   },
        // ),
        blocks: template.blocks,
        company: {
          connect: {
            id: company.companyId,
          },
        },
        customer: {
          connect: {
            uuid: input.customerUuid,
          },
        },
        name: input.name,
        theme: template.theme,
      },
    });

    return {
      name: newOffer.name,
      uuid: newOffer.uuid,
    };
  });
