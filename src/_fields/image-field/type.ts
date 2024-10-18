import { z } from "zod";

export const ImageFieldConfigSchema = z.object({
  alt: z.string(),
  label: z.string(),
  type: z.literal("image"),
  url: z.string(),
});
export type ImageFieldConfig = z.infer<typeof ImageFieldConfigSchema>;
