import { OfferSchema } from "@/server/api/offer/types";
import { db } from "@/server/db";

export const getOfferPreviewSsr = async (offerUuid: string) => {
  const offer = await db.offer.findUnique({
    where: { uuid: offerUuid },
  });

  if (!offer) {
    throw new Error("Offer not found");
  }

  return OfferSchema.parse(offer);
};
