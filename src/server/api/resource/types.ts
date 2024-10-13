import { z } from "zod";

import { BlockSchema } from "@/_blocks/types";

export const ThemeEnum = z.enum(["light", "dark"]);

export type ThemeEnum = z.infer<typeof ThemeEnum>;

export const ResourceSchema = z.object({
  blocks: z.array(BlockSchema),
  name: z.string(),
  theme: ThemeEnum,
  uuid: z.string(),
  logoUrl: z.string().nullish(),
});

export type Resource = z.infer<typeof ResourceSchema>;

export const MinifiedResourceSchema = z.object({
  createdAt: z.date(),
  name: z.string(),
  updatedAt: z.date(),
  uuid: z.string(),
});

export type MinifiedResource = z.infer<typeof MinifiedResourceSchema>;
