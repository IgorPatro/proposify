import { z } from "zod";

import { BlockSchema } from "@/_blocks/types";

import { ThemeEnum } from "../template/types";

export const OfferSchema = z.object({
  blocks: z.array(BlockSchema),
  name: z.string(),
  theme: ThemeEnum,
  uuid: z.string(),
});

export type Offer = z.infer<typeof OfferSchema>;

export const MinifiedOfferSchema = z.object({
  createdAt: z.date(),
  customer: z.object({
    email: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    phone: z.string(),
    uuid: z.string(),
  }),
  name: z.string(),
  updatedAt: z.date(),
  uuid: z.string(),
});

export type MinifiedOffer = z.infer<typeof MinifiedOfferSchema>;
