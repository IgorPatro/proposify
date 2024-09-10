import { type Offer } from "@/server/api/offer/types";
import { getServerAuthSession } from "@/server/auth";
import { db } from "@/server/db";

export const getEditorOfferSsr = async (offerUuid: string) => {
  const session = await getServerAuthSession();

  if (!session) {
    throw new Error("Unauthorized");
  }

  const offer = await db.offer.findUnique({
    where: { uuid: offerUuid },
  });

  if (!offer) {
    throw new Error("Offer not found");
  }

  // TODO: Fix here
  return offer as unknown as Offer;
};
