import React from "react";

import { Button } from "@/components/base/button";
import { useEditorStore } from "@/components/editor/template-editor/store";
import { api } from "@/trpc/react";

import { EditorSidebarBlockSettings } from "./editor-sidebar-block-settings";
import { EditorSidebarBlocks } from "./editor-sidebar-blocks";
import { EditorSidebarTemplateSettings } from "./editor-sidebar-template-settings";
import { EditorSidebarThemeSettings } from "./editor-sidebar-theme-settings";

interface EditorSidebarProps {
  selectedBlockUuid: string | undefined;
  templateUuid: string;
}

export const EditorSidebar = ({
  selectedBlockUuid,
  templateUuid,
}: EditorSidebarProps) => {
  const { isPending: isSaveTemplatePending, mutateAsync: saveTemplate } =
    api.template.save.useMutation();
  const blocks = useEditorStore((store) => store.blocks);
  const theme = useEditorStore((store) => store.theme);
  const name = useEditorStore((store) => store.name);

  const onSaveTemplate = async () => {
    // TODO: Add error handling and toast message
    await saveTemplate({ blocks, name, templateUuid, theme });
  };

  return (
    <div className="fixed left-0 top-0 h-full w-80 overflow-scroll bg-gray-200 p-4">
      <EditorSidebarTemplateSettings />
      <EditorSidebarBlocks />
      <EditorSidebarThemeSettings />
      {selectedBlockUuid ? (
        <EditorSidebarBlockSettings selectedBlockUuid={selectedBlockUuid} />
      ) : null}
      <Button isLoading={isSaveTemplatePending} onClick={onSaveTemplate}>
        Save
      </Button>
    </div>
  );
};
