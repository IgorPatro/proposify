import { db } from "@/server/db";
import { ResourceSchema } from "../resource/types";

export const getTemplatePreviewSsr = async (templateUuid: string) => {
  const template = await db.template.findUnique({
    where: { uuid: templateUuid },
  });

  if (!template) {
    throw new Error("Template not found");
  }

  return ResourceSchema.parse(template);
};
