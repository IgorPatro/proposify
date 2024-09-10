import { z } from "zod";

import { type MinifiedTemplate } from "@/server/api/template/types";
import { db } from "@/server/db";

export const getAllTemplatesMinifiedSsr = async () => {
  const templates = await db.template.findMany();

  return templates.map((template) => ({
    createdAt: template.createdAt,
    name: template.name,
    updatedAt: template.updatedAt,
    uuid: template.uuid,
  })) as MinifiedTemplate[];
};
