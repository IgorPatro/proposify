import { type Template } from "@/server/api/routers/template/types";
import { getServerAuthSession } from "@/server/auth";
import { db } from "@/server/db";

export const getTemplate = async (templateUuid: string) => {
  const session = await getServerAuthSession();

  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (!session) {
    throw new Error("Unauthorized");
  }

  const template = await db.template.findUnique({
    where: { uuid: templateUuid },
  });

  if (!template) {
    throw new Error("Template not found");
  }

  // TODO: Fix here
  return template as unknown as Template;
};
