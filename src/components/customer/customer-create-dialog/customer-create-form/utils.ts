import { z } from "zod";

export const CustomerCreateFormValidationResolver = z
  .object({
    city: z.string().optional(),
    country: z.string().optional(),
    email: z.string().email("Invalid email address"),
    firstName: z.string().min(3, "First name must be at least 3 characters"),
    houseNumber: z.string().optional(),
    lastName: z.string().min(3, "Last name must be at least 3 characters"),
    phone: z.string().min(3, "Phone must be at least 3 characters"),
    street: z.string().optional(),
    uuid: z.string().uuid(),
    zipCode: z.string().optional(),
  })
  .refine((data) => !data.email || !data.phone, {
    message: "Email or Phone is required",
    path: ["email", "phone"],
  });
