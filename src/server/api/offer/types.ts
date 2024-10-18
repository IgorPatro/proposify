import { z } from "zod";

import { ResourceSchema } from "../resource/types";

export const MinifiedOfferSchema = ResourceSchema.extend({
  customer: z.object({
    email: z.string().nullish(),
    firstName: z.string(),
    lastName: z.string(),
    phone: z.string().nullish(),
    uuid: z.string(),
  }),
});

export type MinifiedOffer = z.infer<typeof MinifiedOfferSchema>;
