import { protectedProcedure } from "../trpc";

export const getAllCustomersMinified = protectedProcedure.query(
  async ({ ctx }) => {
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

    const customers = await ctx.db.customer.findMany({
      orderBy: { updatedAt: "desc" },
      where: {
        companyId: company.companyId,
      },
    });

    return customers.map((customer) => ({
      email: customer.email,
      firstName: customer.firstName,
      lastName: customer.lastName,
      phone: customer.phone,
      uuid: customer.uuid,
    }));
  },
);
