import { protectedProcedure } from "../trpc";

export const getCompanyAssets = protectedProcedure.query(async ({ ctx }) => {
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

  const assets = await ctx.db.asset.findMany({
    orderBy: { updatedAt: "desc" },
    where: {
      companyId: company?.companyId,
    },
  });

  return assets;
});
