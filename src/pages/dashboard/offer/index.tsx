import React from "react";

import { Seo } from "@/components/base/seo";
import { PageOffers } from "@/components/offer/page-offers";
import { DashboardLayout } from "@/layouts/dashboard-layout";

const OffersPage = () => {
  return (
    <>
      <Seo title="Oferty | Proposify" />
      <PageOffers />
    </>
  );
};

OffersPage.getLayout = DashboardLayout;

export default OffersPage;
