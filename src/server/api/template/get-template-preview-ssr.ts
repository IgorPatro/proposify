import { TemplateSchema } from "@/server/api/template/types";
import { db } from "@/server/db";

export const getTemplatePreviewSsr = async (templateUuid: string) => {
  const template = await db.template.findUnique({
    where: { uuid: templateUuid },
  });

  if (!template) {
    throw new Error("Template not found");
  }

  return TemplateSchema.parse(template);
};
