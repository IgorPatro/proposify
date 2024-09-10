import { protectedProcedure } from "../procedures";

export const getAllTemplatesMinified = protectedProcedure.query(
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

    const templates = await ctx.db.template.findMany({
      orderBy: { updatedAt: "desc" },
      where: {
        company: {
          id: company.companyId,
        },
      },
    });

    return templates.map((template) => ({
      name: template.name,
      uuid: template.uuid,
    }));
  },
);
