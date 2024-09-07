import { z } from "zod";

import { protectedProcedure } from "../../trpc";

export const CreateOfferInputSchema = z.object({
  customerUuid: z.string().optional(),
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

    // Tworzymy ofertę na podstawie szablonu,
    // Podmieniamy jednak dynamiczne dane na tym etapie
    // Na przykład dane klienta w miejscach w ofercie, gdzie są zmiennymi
    // Te dane mogą zostać potem manualnie zmienione przez użytkownika
    const newOffer = await ctx.db.offer.create({
      data: {
        blocks: template.blocks,
        company: {
          connect: {
            id: company.companyId,
          },
        },
        customer: input.customerUuid
          ? {
              connect: {
                uuid: input.customerUuid,
              },
            }
          : undefined,
        name: input.name,
        theme: template.theme,
      },
    });

    return {
      name: newOffer.name,
      uuid: newOffer.uuid,
    };
  });
