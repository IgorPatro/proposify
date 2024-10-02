import React from "react";

import { useEditorStore } from "@/components/editor/store";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { api } from "@/server/trpc";

import { EditorSidebarBlockSettings } from "./editor-sidebar-block-settings";
import { EditorSidebarBlocks } from "./editor-sidebar-blocks";
import { EditorSidebarTemplateSettings } from "./editor-sidebar-template-settings";
import { EditorSidebarThemeSettings } from "./editor-sidebar-theme-settings";

interface EditorSidebarProps {
  selectedBlockUuid: string | undefined;
  resourceUuid: string;
}

export const EditorSidebar = ({
  resourceUuid,
  selectedBlockUuid,
}: EditorSidebarProps) => {
  const { isPending: isSaveTemplatePending, mutateAsync: saveTemplate } =
    api.template.save.useMutation();
  const blocks = useEditorStore((store) => store.blocks);
  const theme = useEditorStore((store) => store.theme);
  const name = useEditorStore((store) => store.name);

  const onSaveTemplate = async () => {
    // TODO: Add error handling and toast message
    await saveTemplate({ blocks, name, templateUuid: resourceUuid, theme });
  };

  return (
    <div className="fixed bottom-0 left-0 flex h-[calc(100vh-56px)] w-80 flex-col gap-4 overflow-scroll bg-gray-100 p-4 scrollbar-hide">
      <EditorSidebarTemplateSettings />
      <EditorSidebarThemeSettings />
      <EditorSidebarBlocks />
      <Separator />
      <EditorSidebarBlockSettings selectedBlockUuid={selectedBlockUuid} />
      <Separator />
      <Button
        className="w-full"
        isLoading={isSaveTemplatePending}
        onClick={onSaveTemplate}
      >
        Save
      </Button>
    </div>
  );
};
