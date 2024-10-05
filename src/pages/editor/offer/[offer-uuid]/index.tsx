import {
  type InferGetServerSidePropsType,
  type GetServerSideProps,
} from "next";
import React from "react";

import { Editor } from "@/components/editor";
import { EditorNavigation } from "@/components/navigation/editor-navigation";
import { EditorLayout } from "@/layouts/editor-layout";
import { api } from "@/utils/api";

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

const EditorOfferPage = ({
  offerUuid,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data: offer } = api.offer.getOne.useQuery({ offerUuid });

  return (
    <>
      <EditorNavigation />
      <div className="flex w-full bg-zinc-500">
        {offer ? <Editor resource={offer} resourceUuid={offerUuid} /> : null}
      </div>
    </>
  );
};

EditorOfferPage.getLayout = EditorLayout;

export default EditorOfferPage;
