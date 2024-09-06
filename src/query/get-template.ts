import { getServerAuthSession } from "@/server/auth";
import { db } from "@/server/db";

export const getTemplate = async (templateUuid: string) => {
  const session = await getServerAuthSession();

  if (!session) {
    throw new Error("Unauthorized");
  }

  const template = await db.template.findUnique({
    where: { uuid: templateUuid },
  });

  if (!template) {
    throw new Error("Template not found");
  }

  return template;
};
