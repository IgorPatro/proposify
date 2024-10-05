import React from "react";

import { Button } from "@/components/ui/button";
import { useToggle } from "@/hooks/use-toggle";
import { api } from "@/utils/api";

import { OfferCreateDialog } from "../offer-create-dialog";
import { OffersTable } from "../offers-table";

export const PageOffers = () => {
  const { data: offers } = api.offer.getAll.useQuery();
  const [isCreateDialogOpen, toggleCreateDialog] = useToggle();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Offers</h1>
      <OfferCreateDialog
        isOpen={isCreateDialogOpen}
        onClose={toggleCreateDialog}
      />
      {offers && offers.length >= 1 ? <OffersTable offers={offers} /> : null}
      <div className="flex w-full justify-end">
        <Button className="w-fit" onClick={toggleCreateDialog}>
          Create offer
        </Button>
      </div>
    </div>
  );
};
