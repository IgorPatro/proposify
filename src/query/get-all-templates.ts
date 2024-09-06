import { db } from "@/server/db";

export const getAllTemplatesMinified = async () => {
  const templates = await db.template.findMany();

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return templates.map((template) => ({
    name: template.name,
    uuid: template.uuid,
  }));
};
