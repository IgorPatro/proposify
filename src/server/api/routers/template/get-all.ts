import { protectedProcedure } from "../../trpc";

export const getAll = protectedProcedure.query(async ({ ctx }) => {
  const templates = await ctx.db.template.findMany({
    orderBy: { updatedAt: "desc" },
    where: {
      company: {
        id: ctx.session.user.company.id,
      },
    },
  });

  return templates.map((template) => ({
    name: template.name,
    uuid: template.uuid,
  }));
});
