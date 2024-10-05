import {
  type InferGetServerSidePropsType,
  type GetServerSideProps,
} from "next";
import React from "react";

import { Resource } from "@/components/resource";
import { getOfferPreviewSsr } from "@/server/api/offer/get-offer-preview-ssr";
import { type Offer } from "@/server/api/offer/types";

export const getServerSideProps: GetServerSideProps<{
  offer: Offer;
}> = async (ctx) => {
  const offerUuid = ctx.query["offer-uuid"] as string;

  const offer = await getOfferPreviewSsr(offerUuid);

  return {
    props: {
      offer,
    },
  };
};

const OfferPage = ({
  offer,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <Resource resource={offer} />;
};

export default OfferPage;
