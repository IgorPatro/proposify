import { z } from "zod";

export const CustomerCreateFormValidationResolver = z.object({
  city: z.string().optional(),
  country: z.string().optional(),
  email: z.string().optional(),
  firstName: z.string().min(3, "First name must be at least 3 characters"),
  houseNumber: z.string().optional(),
  lastName: z.string().min(3, "Last name must be at least 3 characters"),
  phone: z.string().optional(),
  street: z.string().optional(),
  zipCode: z.string().optional(),
});
// .refine((data) => !data.email || !data.phone, {
//   message: "Email or Phone is required",
//   path: ["email"],
// });
