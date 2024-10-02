import { z } from "zod";

export const ImageFieldConfigSchema = z.object({
  label: z.string(),
  alt: z.string(),
  type: z.literal("image"),
  url: z.string(),
});
export type ImageFieldConfig = z.infer<typeof ImageFieldConfigSchema>;
