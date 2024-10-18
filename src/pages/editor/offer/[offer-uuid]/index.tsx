import {
  type InferGetServerSidePropsType,
  type GetServerSideProps,
} from "next";
import React from "react";

import { Editor } from "@/components/editor";
import { useEditorStore } from "@/components/editor/store";
import { EditorNavigation } from "@/components/navigation/editor-navigation";
import { toast } from "@/hooks/use-toast";
import { EditorLayout } from "@/layouts/editor-layout";
import { api } from "@/utils/api";
import { getDashboardOffersHref } from "@/utils/hrefs/dashboard";

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
      await saveOffer({ blocks, logoUrl, name, offerUuid, theme });
      toast({
        title: "Zapisano ofertę",
      });
    } catch (error) {
      toast({
        description: (error as Error).message,
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
        isOffer
        isLoading={isPendingSaveOffer || isFetchingOffer}
        resourceName={offer?.name}
        resourceUuid={offerUuid}
        onGoBack={onGoBack}
        onSave={onSaveOffer}
      />
      <div className="flex w-full bg-zinc-500">
        <Editor isOffer isLoading={isFetchingOffer} resource={offer} />
      </div>
    </>
  );
};

EditorOfferPage.getLayout = EditorLayout;

export default EditorOfferPage;
