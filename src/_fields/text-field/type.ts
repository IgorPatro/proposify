import { z } from "zod";

export const TextFieldConfigSchema = z.object({
  label: z.string(),
  content: z.string(),
  type: z.literal("text"),
});
export type TextFieldConfig = z.infer<typeof TextFieldConfigSchema>;
