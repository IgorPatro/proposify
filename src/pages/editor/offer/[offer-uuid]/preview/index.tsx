import {
  type InferGetServerSidePropsType,
  type GetServerSideProps,
} from "next";
import React from "react";

import { Resource } from "@/components/resource";
import { getOfferPreviewSsr } from "@/server/api/offer/get-offer-preview-ssr";
import { Resource as ResourceType } from "@/server/api/resource/types";

export const getServerSideProps: GetServerSideProps<{
  offer: ResourceType;
}> = async (ctx) => {
  const offerUuid = ctx.query["offer-uuid"] as string;

  const offer = await getOfferPreviewSsr(offerUuid);

  return {
    props: {
      offer,
    },
  };
};

const EditorOfferPagePreview = ({
  offer,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // TODO: Tracking is enabled only for testing purposes
  return <Resource trackingEnabled={true} resource={offer} type="offer" />;
};

export default EditorOfferPagePreview;
