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
