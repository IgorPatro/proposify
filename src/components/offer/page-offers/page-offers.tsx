"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { useToggle } from "@/hooks/use-toggle";

import { OfferCreateDialog } from "../offer-create-dialog";
import { OffersTable } from "../offers-table";
import { MinifiedOffer } from "@/server/api/offer/types";

interface PageOffersProps {
  offers: MinifiedOffer[];
}

export const PageOffers = ({ offers }: PageOffersProps) => {
  const [isCreateDialogOpen, toggleCreateDialog] = useToggle();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Offers</h1>
      <OfferCreateDialog
        isOpen={isCreateDialogOpen}
        onClose={toggleCreateDialog}
      />
      <OffersTable offers={offers} />
      <div className="flex w-full justify-end">
        <Button className="w-fit" onClick={toggleCreateDialog}>
          Create offer
        </Button>
      </div>
    </div>
  );
};
