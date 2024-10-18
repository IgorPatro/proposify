import React from "react";
import { Resource } from "@/server/api/resource/types";
import { twMerge } from "tailwind-merge";
import { getBlockByName, getBlockIcon } from "@/_blocks/utils";

interface ResourceSidebarProps {
  resource: Resource;
  isMobileSidebarOpen: boolean;
  toggleMobileSidebarOpen: () => void;
}

export const ResourceSidebar = ({
  resource,
  isMobileSidebarOpen,
  toggleMobileSidebarOpen,
}: ResourceSidebarProps) => {
  return (
    <aside
      className={twMerge(
        "fixed bottom-0 left-0 z-20 flex h-[calc(100vh-56px)] w-full max-w-64 flex-col items-center gap-4 overflow-y-scroll bg-gray-700 p-4 transition-transform",
        isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full",
        "lg:translate-x-0",
        "shadow-2xl shadow-black scrollbar-hide lg:shadow-none",
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
              {/* <Icon className="h-full w-full bg-gray-900 text-gray-500 hover:bg-gray-800" /> */}
              {/* <div className="scale-50"> */}
              {/* </div> */}
              <iframe
                className="w-full-hd pointer-events-none absolute left-0 top-0 aspect-video scale-[0.10833333333]"
                style={{
                  transformOrigin: "top left",
                }}
                src="https://patrocreations.com/"
              />
              {/* {getBlockByName(block.name)({
                  fields: block.fields,
                  themeEnum: resource.theme,
                  resource,
                })} */}
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
