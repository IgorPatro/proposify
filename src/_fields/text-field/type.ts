import { z } from "zod";

export const TextFieldConfigSchema = z.object({
  content: z.string(),
  label: z.string(),
  type: z.literal("text"),
});
export type TextFieldConfig = z.infer<typeof TextFieldConfigSchema>;
