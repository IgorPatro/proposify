import { z } from "zod";

export const OfferCreateFormValidationResolver = z.object({
  customerUuid: z.string().uuid().optional(),
  name: z.string().min(3, "Name must be at least 3 characters"),
  templateUuid: z.string().uuid(),
});
