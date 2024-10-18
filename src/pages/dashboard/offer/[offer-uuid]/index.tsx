import React from "react";

import { Seo } from "@/components/base/seo";
import { DashboardLayout } from "@/layouts/dashboard-layout";
import { OfferDetails } from "@/components/offer/offer-details";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps: GetServerSideProps<{
  offerUuid: string;
}> = async (ctx) => {
  const offerUuid = ctx.query["offer-uuid"] as string;

  return {
    props: {
      offerUuid,
    },
  };
};

const OfferPage = ({
  offerUuid,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Seo title="Oferta | Proposify" />
      <OfferDetails offerUuid={offerUuid} />
    </>
  );
};

OfferPage.getLayout = DashboardLayout;

export default OfferPage;
