import React from "react";

import { getAllOffersMinified } from "@/query/get-all-offers-minified";
import { PageOffers } from "@/components/template/page-offers/page-offers";

const TemplatesPage = async () => {
  const offers = await getAllOffersMinified();

  return <PageOffers offers={offers} />;
};

export default TemplatesPage;
