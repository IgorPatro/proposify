"use client";

import React from "react";

import { getBlockByName } from "@/_blocks/utils";
import { type Template } from "@/server/api/template/types";

interface OfferProps {
  offer: Template;
}

export const Offer = ({ offer }: OfferProps) => {
  return (
    <main className="max-w-screen max-h-screen overflow-hidden bg-gray-500">
      <header className="fixed left-0 top-0 h-14 w-full bg-gray-800 p-4 text-white drop-shadow-2xl">
        Oferta panele foto
      </header>

      {/* TODO: Display slides covers */}
      <aside className="fixed bottom-0 left-0 flex h-[calc(100vh-56px)] w-64 flex-col items-center gap-4 overflow-y-scroll bg-gray-700 p-4">
        <div className="aspect-video w-44 bg-black">Img 1</div>
        <div className="aspect-video w-44 bg-black">Img 1</div>
        <div className="aspect-video w-44 bg-black">Img 1</div>
        <div className="aspect-video w-44 bg-black">Img 1</div>
        <div className="aspect-video w-44 bg-black">Img 1</div>
        <div className="aspect-video w-44 bg-black">Img 1</div>
        <div className="aspect-video w-44 bg-black">Img 1</div>
        <div className="aspect-video w-44 bg-black">Img 1</div>
        <div className="aspect-video w-44 bg-black">Img 1</div>
        <div className="aspect-video w-44 bg-black">Img 1</div>
      </aside>

      <div className="flex h-screen max-h-screen min-h-screen w-full overflow-hidden pl-64 pt-14">
        <div className="flex w-full justify-center overflow-y-scroll px-10 py-4">
          <div className="max-w-360 flex w-full flex-col gap-4">
            {offer.blocks.map((block) => {
              return (
                <section key={block.uuid}>
                  {getBlockByName(block.name)({
                    fields: block.fields,
                    themeEnum: offer.theme,
                  })}
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};
