import { z } from "zod";

import { BlockSchema } from "@/_blocks/types";

export const ResourceEnum = z.enum(["offer", "template"]);
export type ResourceEnum = z.infer<typeof ResourceEnum>;

export const ThemeEnum = z.enum(["light", "dark"]);

export type ThemeEnum = z.infer<typeof ThemeEnum>;

export const ResourceSchema = z.object({
  blocks: z.array(BlockSchema),
  logoUrl: z.string().nullish(),
  name: z.string(),
  theme: ThemeEnum,
  uuid: z.string(),
});

export type Resource = z.infer<typeof ResourceSchema>;

export const MinifiedResourceSchema = z.object({
  createdAt: z.date(),
  name: z.string(),
  updatedAt: z.date(),
  uuid: z.string(),
});

export type MinifiedResource = z.infer<typeof MinifiedResourceSchema>;
