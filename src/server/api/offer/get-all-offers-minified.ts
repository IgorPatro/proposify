import { protectedProcedure } from "../trpc";

export const getAllOffersMinified = protectedProcedure.query(
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

    const offers = await ctx.db.offer.findMany({
      include: {
        customer: true,
      },
      orderBy: { updatedAt: "desc" },
      where: {
        company: {
          id: company.companyId,
        },
      },
    });

    return offers.map((offer) => ({
      createdAt: offer.createdAt,
      customer: {
        email: offer.customer?.email,
        firstName: offer.customer?.firstName,
        lastName: offer.customer?.lastName,
        phone: offer.customer?.phone,
        uuid: offer.customer?.uuid,
      },
      name: offer.name,
      updatedAt: offer.updatedAt,
      uuid: offer.uuid,
      logoUrl: offer.logoUrl,
    }));
  },
);
