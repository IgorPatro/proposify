import React from "react";
import { HiPlus } from "react-icons/hi";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { EditorSidebarBlockSettings } from "../editor-sidebar-block-settings";
import { EditorSidebarBlocks } from "../editor-sidebar-blocks";
import { EditorSidebarResourceSettings } from "../editor-sidebar-resource-settings";
import { EditorSidebarThemeSettings } from "../editor-sidebar-theme-settings";

interface TemplateEditorSidebarProps {}

export const TemplateEditorSidebar = ({}: TemplateEditorSidebarProps) => {
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
            <HiPlus className="size-5" />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="block">
          <EditorSidebarBlockSettings />
        </TabsContent>
        <TabsContent className="flex flex-col gap-4" value="global">
          <EditorSidebarResourceSettings />
          <EditorSidebarThemeSettings />
        </TabsContent>
        <TabsContent value="plus">
          <EditorSidebarBlocks />
        </TabsContent>
      </Tabs>
    </div>
  );
};
