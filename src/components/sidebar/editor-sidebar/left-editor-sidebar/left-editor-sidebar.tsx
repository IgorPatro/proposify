import { set } from "lodash";
import React from "react";
import { FaGear } from "react-icons/fa6";
import { HiPlus } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

import { useIsSidebarLeftOpen } from "@/components/editor/atoms";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toggle } from "@/components/ui/toggle";

import { EditorSidebarBlocks } from "../editor-sidebar-blocks";
import { EditorSidebarResourceSettings } from "../editor-sidebar-resource-settings";
import { EditorSidebarThemeSettings } from "../editor-sidebar-theme-settings";

export const LeftEditorSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useIsSidebarLeftOpen();
  const [openTab, setOpenTab] = React.useState<"add" | "settings" | null>(null);

  const toggleTab = (tab: "add" | "settings") => {
    if (tab === openTab) {
      setOpenTab(null);
      setIsSidebarOpen(false);
      return;
    }

    setIsSidebarOpen(true);
    setOpenTab(tab);
  };

  const renderTab = () => {
    if (!openTab || !isSidebarOpen) return null;

    if (openTab === "add") {
      return <EditorSidebarBlocks />;
    }

    if (openTab === "settings") {
      return (
        <div className="flex flex-col gap-4">
          <EditorSidebarResourceSettings />
          <EditorSidebarThemeSettings />
        </div>
      );
    }
  };

  return (
    <div
      className={twMerge(
        "fixed bottom-0 left-0 flex h-[calc(100vh-56px)] overflow-scroll border-r border-gray-700 bg-background scrollbar-hide",
        isSidebarOpen ? "w-80" : "w-14",
      )}
    >
      <div className="flex w-14 flex-col items-center gap-2 border-r border-gray-700 p-2">
        <Toggle
          className="aspect-square w-full"
          pressed={openTab === "add"}
          onPressedChange={() => toggleTab("add")}
        >
          <HiPlus className="size-5" />
        </Toggle>
        <Toggle
          className="aspect-square w-full"
          pressed={openTab === "settings"}
          onPressedChange={() => toggleTab("settings")}
        >
          <FaGear className="size-5" />
        </Toggle>
      </div>

      <div className="w-full p-4">{renderTab()}</div>
    </div>
  );
};
