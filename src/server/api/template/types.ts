import { z } from "zod";

import { BlockSchema } from "@/_blocks/types";

export const ThemeEnum = z.enum(["light", "dark"]);

export type ThemeEnum = z.infer<typeof ThemeEnum>;

export const TemplateSchema = z.object({
  blocks: z.array(BlockSchema),
  name: z.string(),
  theme: ThemeEnum,
  uuid: z.string(),
});

export type Template = z.infer<typeof TemplateSchema>;

export const MinifiedTemplateSchema = z.object({
  createdAt: z.date(),
  name: z.string(),
  updatedAt: z.date(),
  uuid: z.string(),
});

export type MinifiedTemplate = z.infer<typeof MinifiedTemplateSchema>;
