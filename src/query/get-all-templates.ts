import { db } from "@/server/db";

export const getAllTemplatesMinified = async () => {
  const templates = await db.template.findMany();

  return templates.map((template) => ({
    name: template.name,
    uuid: template.uuid,
  }));
};
