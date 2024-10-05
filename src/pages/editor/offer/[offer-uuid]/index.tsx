import React from "react";

import { Editor } from "@/components/editor";
import { EditorNavigation } from "@/components/navigation/editor-navigation";
import { EditorLayout } from "@/layouts/editor-layout";
import { getEditorOfferSsr } from "@/server/api/offer/get-editor-offer-ssr";

interface EditorOfferPageProps {
  params: {
    "offer-uuid": string;
  };
}

const EditorOfferPage = async ({ params }: EditorOfferPageProps) => {
  const { "offer-uuid": offerUuid } = params;
  const offer = await getEditorOfferSsr(offerUuid);

  return (
    <>
      <EditorNavigation isOffer />
      <div className="flex w-full bg-zinc-500">
        <Editor isOffer resource={offer} resourceUuid={offerUuid} />
      </div>
    </>
  );
};

EditorOfferPage.getLayout = EditorLayout;

export default EditorOfferPage;
