import { z } from "zod";

export const ThemeSchema = z.object({
  accent: z.string(),
  background: z.string(),
  button: z.object({
    primary: z.object({
      background: z.string(),
      border: z.string(),
      color: z.string(),
      hover: z.string(),
    }),
    secondary: z.object({
      background: z.string(),
      border: z.string(),
      color: z.string(),
      hover: z.string(),
    }),
  }),
  error: z.string(),
  text: z.object({
    primary: z.string(),
    secondary: z.string(),
  }),
});

export type ThemeSchema = z.infer<typeof ThemeSchema>;
