import { z } from "zod";

export const SignupFormValidationResolver = z
  .object({
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
    email: z.string().email("Invalid email"),
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    termsAccepted: z.literal(true),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
