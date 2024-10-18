import { type GetServerSideProps, type InferGetServerSidePropsType } from "next";
import React from "react";

import { Seo } from "@/components/base/seo";
import { OfferDetails } from "@/components/offer/offer-details";
import { DashboardLayout } from "@/layouts/dashboard-layout";

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
