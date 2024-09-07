import { z } from "zod";

import { db } from "@/server/db";

export const MinifiedTemplateSchema = z.object({
  createdAt: z.date(),
  name: z.string(),
  updatedAt: z.date(),
  uuid: z.string(),
});

export type MinifiedTemplate = z.infer<typeof MinifiedTemplateSchema>;

export const getAllTemplatesMinified = async () => {
  const templates = await db.template.findMany();

  return templates.map((template) => ({
    createdAt: template.createdAt,
    name: template.name,
    updatedAt: template.updatedAt,
    uuid: template.uuid,
  })) as MinifiedTemplate[];
};
