import React from "react";
import { twMerge } from "tailwind-merge";

import { BlockDynamicThumbnail } from "@/components/block-dynamic-thumbnail";
import { type Resource, type ResourceEnum } from "@/server/api/resource/types";

interface ResourceSidebarProps {
  isMobileSidebarOpen: boolean;
  resource: Resource;
  type: ResourceEnum;
  toggleMobileSidebarOpen: () => void;
}

export const ResourceSidebar = ({
  isMobileSidebarOpen,
  resource,
  toggleMobileSidebarOpen,
  type,
}: ResourceSidebarProps) => {
  return (
    <aside
      className={twMerge(
        "fixed bottom-0 left-0 z-20 flex h-[calc(100vh-56px)] w-full max-w-64 flex-col items-center gap-4 overflow-y-scroll bg-gray-700 p-4 transition-transform",
        isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full",
        "lg:translate-x-0",
        "shadow-2xl shadow-black lg:shadow-none",
      )}
    >
      {resource.blocks.map((block, index) => {
        return (
          <div
            className="flex w-52 flex-col items-center justify-center gap-2"
            key={block.uuid}
          >
            <a
              className="relative block aspect-video w-full"
              href={`#${block.uuid}`}
              onClick={toggleMobileSidebarOpen}
            >
              <BlockDynamicThumbnail
                blockUuid={block.uuid}
                resourceUuid={resource.uuid}
                type={type}
              />
            </a>
            <div className="block w-full text-center font-medium text-gray-300">
              {index + 1}
            </div>
          </div>
        );
      })}
    </aside>
  );
};
