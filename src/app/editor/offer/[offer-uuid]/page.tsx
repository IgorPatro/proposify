import React from "react";

import { Editor } from "@/components/editor";
import { getEditorOfferSsr } from "@/server/api/offer/get-editor-offer-ssr";

interface EditorTemplatePageProps {
  params: {
    "offer-uuid": string;
  };
}

const EditorTemplatePage = async ({ params }: EditorTemplatePageProps) => {
  const { "offer-uuid": offerUuid } = params;
  const offer = await getEditorOfferSsr(offerUuid);

  return <Editor resource={offer} resourceUuid={offerUuid} />;
};

export default EditorTemplatePage;
