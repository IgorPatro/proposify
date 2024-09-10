import React from "react";

import { PageOffers } from "@/components/template/page-offers";
import { getAllOffersMinifiedSsr } from "@/server/api/offer/get-all-offers-minified-ssr";

const OfferPage = async () => {
  const offers = await getAllOffersMinifiedSsr();

  return <PageOffers offers={offers} />;
};

export default OfferPage;
