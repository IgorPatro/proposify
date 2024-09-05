import React from "react";

import { type Template } from "@/server/api/routers/template/types";

import { getBlockByName } from "../_blocks/utils";

interface OfferProps {
  offer: Template;
}

export const Offer = ({ offer }: OfferProps) => {
  return offer.blocks.map((block) => {
    return (
      <section key={block.uuid}>
        {getBlockByName(block.name)({
          fields: block.fields,
          theme: offer.theme,
        })}
      </section>
    );
  });
};
