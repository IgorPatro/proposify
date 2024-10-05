import { z } from "zod";

export const CustomerSchema = z.object({
  city: z.string().nullish(),
  country: z.string().nullish(),
  email: z.string().nullish(),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string().nullish(),
  street: z.string().nullish(),
  uuid: z.string().uuid(),
  zipCode: z.string().nullish(),
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
