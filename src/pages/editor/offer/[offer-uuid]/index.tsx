import {
  type InferGetServerSidePropsType,
  type GetServerSideProps,
} from "next";
import React from "react";

import { Editor } from "@/components/editor";
import { useEditorStore } from "@/components/editor/store";
import { EditorNavigation } from "@/components/navigation/editor-navigation";
import { EditorLayout } from "@/layouts/editor-layout";
import { api } from "@/utils/api";
import { getDashboardOffersHref } from "@/utils/hrefs/dashboard";
import { toast } from "@/hooks/use-toast";

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
  const { data: offer, isFetching: isFetchingOffer } =
    api.offer.getOne.useQuery({ offerUuid });
  const { isPending: isPendingSaveOffer, mutateAsync: saveOffer } =
    api.offer.save.useMutation();
  const blocks = useEditorStore((store) => store.blocks);
  const theme = useEditorStore((store) => store.theme);
  const name = useEditorStore((store) => store.name);
  const logoUrl = useEditorStore((store) => store.logoUrl);

  const onSaveOffer = async () => {
    try {
      await saveOffer({ blocks, name, offerUuid, theme, logoUrl });
      toast({
        title: "Zapisano ofertę",
      });
    } catch (error) {
      toast({
        description: error.message,
        variant: "destructive",
      });
    }
  };

  // Note: Trigger a reload to turn on/off dark mode
  const onGoBack = () => {
    window.location.href = getDashboardOffersHref();
  };

  return (
    <>
      <EditorNavigation
        resourceName={offer?.name}
        resourceUuid={offerUuid}
        onGoBack={onGoBack}
        onSave={onSaveOffer}
        isLoading={isPendingSaveOffer || isFetchingOffer}
        isOffer
      />
      <div className="flex w-full bg-zinc-500">
        <Editor isLoading={isFetchingOffer} resource={offer} isOffer />
      </div>
    </>
  );
};

EditorOfferPage.getLayout = EditorLayout;

export default EditorOfferPage;
