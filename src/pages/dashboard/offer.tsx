import React from "react";

import { Seo } from "@/components/base/seo";
import { PageOffers } from "@/components/offer/page-offers";
import { DashboardLayout } from "@/layouts/dashboard-layout";

const OfferPage = () => {
  return (
    <>
      <Seo title="Oferty | Proposify" />
      <PageOffers />
    </>
  );
};

OfferPage.getLayout = DashboardLayout;

export default OfferPage;
