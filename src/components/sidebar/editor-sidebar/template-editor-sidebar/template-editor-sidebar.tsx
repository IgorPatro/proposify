import React from "react";
import { HiPlus } from "react-icons/hi";

import { useEditorStore } from "@/components/editor/store";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { api } from "@/utils/api";

import { EditorSidebarBlockSettings } from "../editor-sidebar-block-settings";
import { EditorSidebarBlocks } from "../editor-sidebar-blocks";
import { EditorSidebarResourceSettings } from "../editor-sidebar-resource-settings";
import { EditorSidebarThemeSettings } from "../editor-sidebar-theme-settings";

interface TemplateEditorSidebarProps {
  selectedBlockUuid: string | undefined;
  resourceUuid: string;
}

export const TemplateEditorSidebar = ({
  resourceUuid,
  selectedBlockUuid,
}: TemplateEditorSidebarProps) => {
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
    <div className="fixed bottom-0 left-0 flex h-[calc(100vh-56px)] w-80 flex-col gap-4 overflow-scroll border-r border-gray-700 bg-background p-4 scrollbar-hide">
      <Tabs className="w-full" defaultValue="block">
        <TabsList className="mb-4 w-full">
          <TabsTrigger className="w-full" value="block">
            Blok
          </TabsTrigger>
          <TabsTrigger className="w-full" value="global">
            Ustawienia
          </TabsTrigger>
          <TabsTrigger className="w-full" value="plus">
            <HiPlus className="h-5 w-5" />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="block">
          <EditorSidebarBlockSettings selectedBlockUuid={selectedBlockUuid} />
        </TabsContent>
        <TabsContent value="global" className="flex flex-col gap-4">
          <EditorSidebarResourceSettings />
          <EditorSidebarThemeSettings />
        </TabsContent>
        <TabsContent value="plus">
          <EditorSidebarBlocks />
        </TabsContent>
      </Tabs>

      {/* <Button
        className="w-full"
        isLoading={isSaveTemplatePending}
        onClick={onSaveTemplate}
      >
        Save
      </Button> */}
    </div>
  );
};
