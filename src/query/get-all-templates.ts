import { z } from "zod";

import { db } from "@/server/db";

const MinifiedTemplateSchema = z.object({
  name: z.string(),
  uuid: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type MinifiedTemplate = z.infer<typeof MinifiedTemplateSchema>;

export const getAllTemplatesMinified = async () => {
  const templates = await db.template.findMany();

  return templates.map((template) => ({
    name: template.name,
    uuid: template.uuid,
    createdAt: template.createdAt,
    updatedAt: template.updatedAt,
  })) as MinifiedTemplate[];
};
