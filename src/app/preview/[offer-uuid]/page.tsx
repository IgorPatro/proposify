import React from "react";

import { Offer } from "@/components/offer";
import { getEditorTemplateSsr } from "@/server/api/template/get-editor-template-ssr";

interface OfferPreviewPageProps {
  params: {
    "offer-uuid": string;
  };
}

const OfferPreviewPage = async ({ params }: OfferPreviewPageProps) => {
  const { "offer-uuid": offerUuid } = params;
  const offer = await getEditorTemplateSsr(offerUuid);

  return <Offer offer={offer} />;
};

export default OfferPreviewPage;
