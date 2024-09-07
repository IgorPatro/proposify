import { z } from "zod";

import { db } from "@/server/db";
import { MinifiedOffer } from "./types";

export const getAllOffersMinifiedSsr = async () => {
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
