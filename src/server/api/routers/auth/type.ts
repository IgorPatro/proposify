import { z } from "zod";

export const SignupFormSchema = z.object({
  confirmPassword: z.string(),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
  termsAccepted: z.boolean(),
});

export type SignupFormType = z.infer<typeof SignupFormSchema>;

export const SignupRequestBodySchema = SignupFormSchema.pick({
  email: true,
  firstName: true,
  lastName: true,
  password: true,
});

export type RegisterRequestBodyType = z.infer<typeof SignupRequestBodySchema>;
