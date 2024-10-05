import React from "react";

import { Resource } from "@/components/resource";
import { getEditorOfferSsr } from "@/server/api/offer/get-editor-offer-ssr";

interface EditorOfferPagePreviewProps {
  params: {
    "offer-uuid": string;
  };
}

const EditorOfferPagePreview = async ({
  params,
}: EditorOfferPagePreviewProps) => {
  const { "offer-uuid": offerUuid } = params;
  const offer = await getEditorOfferSsr(offerUuid);

  return <Resource resource={offer} />;
};

export default EditorOfferPagePreview;
