import { z } from "zod";

export const CustomerSchema = z.object({
  city: z.string().optional(),
  country: z.string().optional(),
  email: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string().optional(),
  street: z.string().optional(),
  uuid: z.string().uuid(),
  zipCode: z.string().optional(),
});

export type Customer = z.infer<typeof CustomerSchema>;

export const CustomerMinifiedSchema = CustomerSchema.pick({
  email: true,
  firstName: true,
  lastName: true,
  phone: true,
  uuid: true,
}).extend({
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type MinifiedCustomer = z.infer<typeof CustomerMinifiedSchema>;
