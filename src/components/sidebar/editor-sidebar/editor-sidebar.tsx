import React from "react";

import { useEditorStore } from "@/components/editor/template-editor/store";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
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
    <div className="scrollbar-hide fixed bottom-0 left-0 h-[calc(100vh-56px)] w-80 overflow-scroll border-r border-gray-500 bg-white p-4">
      <Accordion type="single" collapsible>
        <AccordionItem value="template-settings">
          <AccordionTrigger>Template settings</AccordionTrigger>
          <AccordionContent>
            <EditorSidebarTemplateSettings />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="blocks">
          <AccordionTrigger>Blocks</AccordionTrigger>
          <AccordionContent>
            <EditorSidebarBlocks />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="theme-settings">
          <AccordionTrigger>Theme settings</AccordionTrigger>
          <AccordionContent>
            <EditorSidebarThemeSettings />
          </AccordionContent>
        </AccordionItem>

        {selectedBlockUuid ? (
          <AccordionItem value="item-1">
            <AccordionTrigger>Block settings</AccordionTrigger>
            <AccordionContent>
              <EditorSidebarBlockSettings
                selectedBlockUuid={selectedBlockUuid}
              />
            </AccordionContent>
          </AccordionItem>
        ) : null}
      </Accordion>

      <Button
        className="mt-4 w-full"
        isLoading={isSaveTemplatePending}
        onClick={onSaveTemplate}
      >
        Save
      </Button>
    </div>
  );
};
