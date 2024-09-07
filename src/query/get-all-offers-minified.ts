import { z } from "zod";

import { db } from "@/server/db";

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

export const getAllOffersMinified = async () => {
  const offers = await db.offer.findMany({
    include: {
      customer: true,
    },
  });

  return offers.map((offer) => ({
    createdAt: offer.createdAt,
    customer: {
      email: offer.customer?.email,
      firstName: offer.customer?.firstName,
      lastName: offer.customer?.lastName,
      phone: offer.customer?.phone,
      uuid: offer.customer?.uuid,
    },
    name: offer.name,
    updatedAt: offer.updatedAt,
    uuid: offer.uuid,
  })) as MinifiedOffer[];
};
