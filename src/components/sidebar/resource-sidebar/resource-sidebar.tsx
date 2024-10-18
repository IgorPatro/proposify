import React from "react";
import { Resource, ResourceEnum } from "@/server/api/resource/types";
import { twMerge } from "tailwind-merge";
import { getBlockByName, getBlockIcon } from "@/_blocks/utils";
import { getBlockPreviewHref } from "@/utils/hrefs/editor";

interface ResourceSidebarProps {
  resource: Resource;
  isMobileSidebarOpen: boolean;
  toggleMobileSidebarOpen: () => void;
  type: ResourceEnum;
}

export const ResourceSidebar = ({
  resource,
  isMobileSidebarOpen,
  type,
  toggleMobileSidebarOpen,
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
        const Icon = getBlockIcon(block.name);

        return (
          <div
            key={block.uuid}
            className="flex w-52 flex-col items-center justify-center gap-2"
          >
            <a
              href={`#${block.uuid}`}
              onClick={toggleMobileSidebarOpen}
              className="relative block aspect-video w-full"
            >
              <iframe
                // Note: calculate the aspect ratio of the video and scale it down
                className="h-block pointer-events-none absolute left-0 top-0 aspect-video scale-[calc(208/1216)]"
                style={{
                  transformOrigin: "top left",
                }}
                src={getBlockPreviewHref(block.uuid, resource.uuid, type)}
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
