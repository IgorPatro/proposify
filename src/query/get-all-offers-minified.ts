import { z } from "zod";

import { db } from "@/server/db";

const MinifiedOfferSchema = z.object({
  name: z.string(),
  uuid: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  customer: z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    phone: z.string(),
    uuid: z.string(),
  }),
});

export type MinifiedOffer = z.infer<typeof MinifiedOfferSchema>;

export const getAllOffersMinified = async () => {
  const offers = await db.offer.findMany({
    include: {
      customer: true,
    },
  });

  return offers.map((offer) => ({
    name: offer.name,
    uuid: offer.uuid,
    createdAt: offer.createdAt,
    updatedAt: offer.updatedAt,
    customer: {
      firstName: offer.customer.firstName,
      lastName: offer.customer.lastName,
      email: offer.customer.email,
      phone: offer.customer.phone,
      uuid: offer.customer.uuid,
    },
  })) as MinifiedOffer[];
};
