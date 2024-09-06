import { protectedProcedure } from "../../trpc";

export const getAll = protectedProcedure.query(async ({ ctx }) => {
  const company = await ctx.db.user.findUnique({
    select: {
      companyId: true,
    },
    where: {
      id: ctx.session.user.id,
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
});
