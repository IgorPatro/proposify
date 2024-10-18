import { db } from "@/server/db";

import { ResourceSchema } from "../resource/types";

export const getOfferPreviewSsr = async (offerUuid: string) => {
  const offer = await db.offer.findUnique({
    where: { uuid: offerUuid },
  });

  if (!offer) {
    throw new Error("Offer not found");
  }

  return ResourceSchema.parse(offer);
};
