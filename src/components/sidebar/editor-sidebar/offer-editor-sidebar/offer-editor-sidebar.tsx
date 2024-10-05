import React from "react";

import { useEditorStore } from "@/components/editor/store";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { api } from "@/utils/api";

import { EditorSidebarBlockSettings } from "../editor-sidebar-block-settings";
import { EditorSidebarBlocks } from "../editor-sidebar-blocks";
import { EditorSidebarResourceSettings } from "../editor-sidebar-resource-settings";
import { EditorSidebarThemeSettings } from "../editor-sidebar-theme-settings";

interface OfferEditorSidebarProps {
  selectedBlockUuid: string | undefined;
  resourceUuid: string;
}

export const OfferEditorSidebar = ({
  resourceUuid,
  selectedBlockUuid,
}: OfferEditorSidebarProps) => {
  const { isPending: isSaveOfferPending, mutateAsync: saveOffer } =
    api.offer.save.useMutation();
  const blocks = useEditorStore((store) => store.blocks);
  const theme = useEditorStore((store) => store.theme);
  const name = useEditorStore((store) => store.name);

  const onSaveOffer = async () => {
    // TODO: Add error handling and toast message
    await saveOffer({ blocks, name, offerUuid: resourceUuid, theme });
  };

  return (
    <div className="fixed bottom-0 left-0 flex h-[calc(100vh-56px)] w-80 flex-col gap-4 overflow-scroll bg-gray-100 p-4 scrollbar-hide">
      <EditorSidebarResourceSettings />
      <EditorSidebarThemeSettings />
      <EditorSidebarBlocks />
      <Separator />
      <EditorSidebarBlockSettings selectedBlockUuid={selectedBlockUuid} />
      <Separator />
      <Button
        className="w-full"
        isLoading={isSaveOfferPending}
        onClick={onSaveOffer}
      >
        Save & Publish
      </Button>
    </div>
  );
};
