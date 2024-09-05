import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.coerce.string().email(),
  password: z.coerce.string(),
});

export type LoginFormType = z.infer<typeof LoginFormSchema>;
