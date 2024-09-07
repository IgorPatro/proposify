import { z } from "zod";

import { BlockSchema } from "@/_blocks/types";

export const ThemeSchema = z.object({
  bgPrimary: z.string(),
  bgSecondary: z.string(),
  textPrimary: z.string(),
  textSecondary: z.string(),
});

export type Theme = z.infer<typeof ThemeSchema>;

export const TemplateSchema = z.object({
  blocks: z.array(BlockSchema),
  name: z.string(),
  theme: ThemeSchema,
});

export type Template = z.infer<typeof TemplateSchema>;

export const MinifiedTemplateSchema = z.object({
  createdAt: z.date(),
  name: z.string(),
  updatedAt: z.date(),
  uuid: z.string(),
});

export type MinifiedTemplate = z.infer<typeof MinifiedTemplateSchema>;
