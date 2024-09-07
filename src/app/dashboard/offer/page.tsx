import React from "react";

import { PageOffers } from "@/components/template/page-offers";
import { getAllOffersMinified } from "@/query/get-all-offers-minified";

const OfferPage = async () => {
  const offers = await getAllOffersMinified();

  return <PageOffers offers={offers} />;
};

export default OfferPage;
