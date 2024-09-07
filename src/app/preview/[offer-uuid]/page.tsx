import React from "react";

import { Offer } from "@/components/offer";
import { getTemplate } from "@/query/get-template";

interface OfferPreviewPageProps {
  params: {
    "offer-uuid": string;
  };
}

const OfferPreviewPage = async ({ params }: OfferPreviewPageProps) => {
  const { "offer-uuid": offerUuid } = params;
  const offer = await getTemplate(offerUuid);

  return <Offer offer={offer} />;
};

export default OfferPreviewPage;
