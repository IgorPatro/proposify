"use client";

import React from "react";
import { HiOutlineMenuAlt2, HiOutlineX } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

import { getBlockByName, getBlockIcon } from "@/_blocks/utils";
import { useToggle } from "@/hooks/use-toggle";
import { Resource as ResourceType } from "@/server/api/resource/types";

interface ResourceProps {
  resource: ResourceType;
}

export const Resource = ({ resource }: ResourceProps) => {
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <main className="max-w-screen max-h-screen overflow-hidden bg-gray-500">
      <header className="fixed left-0 top-0 flex h-14 w-full items-center justify-between bg-gray-800 p-4 text-white drop-shadow-2xl">
        <div>{resource.name}</div>
        <button className="lg:hidden" onClick={toggleOpen}>
          {isOpen ? (
            <HiOutlineX className="h-7 w-7" />
          ) : (
            <HiOutlineMenuAlt2 className="h-7 w-7" />
          )}
        </button>
      </header>

      {/* TODO: Display slides covers */}
      {/* TODO: Add current slide indicator */}
      <aside
        className={twMerge(
          "fixed bottom-0 left-0 z-20 flex h-[calc(100vh-56px)] w-full flex-col items-center gap-4 overflow-y-scroll bg-gray-700 p-4 transition-transform lg:w-64",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0",
          "max-w-96 shadow-2xl shadow-black scrollbar-hide lg:shadow-none lg:scrollbar-default",
        )}
      >
        {resource.blocks.map((block, index) => {
          const Icon = getBlockIcon(block.name);

          return (
            <div
              key={block.uuid}
              className="flex w-full flex-col items-center justify-center gap-2"
            >
              <a
                href={`#${block.uuid}`}
                onClick={toggleOpen}
                className="block aspect-video w-full max-w-52"
              >
                <Icon className="h-full w-full bg-gray-900 text-gray-500 hover:bg-gray-800" />
              </a>
              <div className="block w-full text-center font-medium text-gray-300">
                {index + 1}
              </div>
            </div>
          );
        })}
      </aside>

      <div className="flex h-screen max-h-screen min-h-screen w-full overflow-hidden pt-14 lg:pl-64">
        <div className="flex w-full justify-center overflow-y-scroll px-10 py-4">
          <div className="flex w-full max-w-360 flex-col gap-4">
            {resource.blocks.map((block) => {
              return (
                <section key={block.uuid} id={block.uuid}>
                  {getBlockByName(block.name)({
                    fields: block.fields,
                    themeEnum: resource.theme,
                    resource,
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
