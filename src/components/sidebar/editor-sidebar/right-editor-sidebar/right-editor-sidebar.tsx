import React from "react";

import { EditorSidebarBlockSettings } from "../editor-sidebar-block-settings";

export const RightEditorSidebar = () => {
  return (
    <div className="fixed bottom-0 right-0 flex h-[calc(100vh-56px)] w-80 flex-col gap-4 overflow-scroll border-r border-gray-700 bg-background p-4 scrollbar-hide">
      <EditorSidebarBlockSettings />
    </div>
  );
};
