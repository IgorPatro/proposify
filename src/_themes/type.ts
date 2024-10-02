import { z } from "zod";

export const ThemeSchema = z.object({
  background: z.string(),
  error: z.string(),
  primary: z.string(),
  secondary: z.string(),
  text: z.string(),
});

export type ThemeSchema = z.infer<typeof ThemeSchema>;
