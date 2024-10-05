import React from "react";

import { Resource } from "@/components/resource";
import { getEditorOfferSsr } from "@/server/api/offer/get-editor-offer-ssr";

// TODO getServerSideProps
interface OfferPageProps {
  params: {
    "offer-uuid": string;
  };
}

const OfferPage = ({ params }: OfferPageProps) => {
  const { "offer-uuid": offerUuid } = params;
  const offer = await getEditorOfferSsr(offerUuid);

  return <Resource resource={offer} />;
};

export default OfferPage;
