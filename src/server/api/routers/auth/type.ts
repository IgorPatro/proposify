import { z } from "zod";

export const RegisterFormSchema = z.object({
  confirmPassword: z.string(),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
  privacyChecked: z.boolean(),
});

export type RegisterFormType = z.infer<typeof RegisterFormSchema>;

export const RegisterRequestBodySchema = RegisterFormSchema.pick({
  email: true,
  firstName: true,
  lastName: true,
  password: true,
});

export type RegisterRequestBodyType = z.infer<typeof RegisterRequestBodySchema>;
