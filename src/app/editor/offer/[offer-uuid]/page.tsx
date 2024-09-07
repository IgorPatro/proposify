import React from "react";

import { Editor } from "@/components/editor/template-editor/editor";
import { getOffer } from "@/query/get-offer";

interface EditorTemplatePageProps {
  params: {
    "offer-uuid": string;
  };
}

const EditorTemplatePage = async ({ params }: EditorTemplatePageProps) => {
  const { "offer-uuid": offerUuid } = params;
  const offer = await getOffer(offerUuid);

  return <Editor resource={offer} resourceUuid={offerUuid} />;
};

export default EditorTemplatePage;
