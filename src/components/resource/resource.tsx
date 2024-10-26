import React from "react";
import { HiOutlineMenuAlt2, HiOutlineX } from "react-icons/hi";

import { getBlockByName } from "@/_blocks/utils";
import { useOfferTimeSpentTracker } from "@/hooks/use-time-spent-tracker";
import { useToggle } from "@/hooks/use-toggle";
import {
  type ResourceEnum,
  type Resource as ResourceType,
} from "@/server/api/resource/types";

import { ResourceSidebar } from "../sidebar/resource-sidebar";

interface ResourceProps {
  resource: ResourceType;
  trackingEnabled?: boolean;
  type: ResourceEnum;
}

export const Resource = ({
  resource,
  trackingEnabled = false,
  type,
}: ResourceProps) => {
  const [isMobileSidebarOpen, toggleMobileSidebarOpen] = useToggle(false);
  const { sectionRefs } = useOfferTimeSpentTracker(
    resource.uuid,
    trackingEnabled,
  );

  return (
    <main className="max-h-full max-w-full overflow-hidden bg-gray-500">
      <header className="fixed left-0 top-0 flex h-14 w-full items-center justify-between bg-gray-800 p-4 text-white drop-shadow-2xl">
        <div>{resource.name}</div>
        {/* <button onClick={() => console.log(handleSubmitTime())}>
          Show times
        </button> */}
        <button className="lg:hidden" onClick={toggleMobileSidebarOpen}>
          {isMobileSidebarOpen ? (
            <HiOutlineX className="size-7" />
          ) : (
            <HiOutlineMenuAlt2 className="size-7" />
          )}
        </button>
      </header>

      <ResourceSidebar
        isMobileSidebarOpen={isMobileSidebarOpen}
        resource={resource}
        toggleMobileSidebarOpen={toggleMobileSidebarOpen}
        type={type}
      />

      <div className="flex h-screen max-h-screen min-h-screen w-full overflow-hidden pt-14 lg:pl-64">
        <div className="flex w-full justify-center overflow-y-scroll px-10 py-4">
          <div className="flex w-full max-w-360 flex-col gap-4">
            {resource.blocks.map((block) => {
              return (
                <section
                  // Note: Append a scroll top, so after navigating to this slide, it is not hidden by the header
                  className="scroll-mt-4"
                  id={block.uuid}
                  key={block.uuid}
                  ref={(el) => {
                    sectionRefs.current[block.uuid] = el;
                  }}
                >
                  {getBlockByName(block.name)({
                    background: block.background,
                    fields: block.fields,
                    resource,
                    themeEnum: resource.theme,
                  })}
                </section>
              );
            })}
            <div className="pb-4" />
          </div>
        </div>
      </div>
    </main>
  );
};
