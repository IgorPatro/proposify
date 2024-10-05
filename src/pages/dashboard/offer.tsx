import React from "react";

import { PageOffers } from "@/components/offer/page-offers";
import { DashboardLayout } from "@/layouts/dashboard-layout";

const OfferPage = () => {
  return <PageOffers />;
};

OfferPage.getLayout = DashboardLayout;

export default OfferPage;
