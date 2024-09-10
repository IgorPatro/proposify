import { type z } from "zod";

import { protectedProcedure } from "../procedures";

import { CustomerSchema } from "./types";

export const CreateCustomerInputSchema = CustomerSchema.omit({ uuid: true });

export type CreateCustomerInput = z.infer<typeof CreateCustomerInputSchema>;

export const createCustomer = protectedProcedure
  .input(CreateCustomerInputSchema)
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

    const newCustomer = await ctx.db.customer.create({
      data: {
        ...input,
        company: {
          connect: {
            id: company.companyId,
          },
        },
      },
    });

    return CustomerSchema.parse(newCustomer);
  });
