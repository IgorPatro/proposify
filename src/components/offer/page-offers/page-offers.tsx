import Link from "next/link";
import React from "react";
import { HiPlus } from "react-icons/hi2";

import { Button } from "@/components/ui/button";
import { useToggle } from "@/hooks/use-toggle";
import { api } from "@/utils/api";
import {
  getDashboardTemplateHref,
  getDashboardTemplatesHref,
} from "@/utils/hrefs/dashboard";

import { OfferCreateDialog } from "../offer-create-dialog";
import { OffersTable } from "../offers-table";

export const PageOffers = () => {
  const { data: offers } = api.offer.getAll.useQuery();
  const [isCreateDialogOpen, toggleCreateDialog] = useToggle();

  return (
    <div className="flex flex-col gap-4">
      <header className="mb-10 flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold">Oferty</h1>
          <p className="w-3/4">
            Stwórz ofertę, którą później będziesz mógł wysłać do klienta.
            Pamiętaj, że do stworzenia ofery potrzebujesz{" "}
            <Link className="underline" href={getDashboardTemplatesHref()}>
              szablonu
            </Link>
            .
          </p>
        </div>
        <Button className="w-fit" onClick={toggleCreateDialog}>
          <HiPlus className="mr-2 h-5 w-5" />
          Nowa oferta
        </Button>
      </header>
      <OfferCreateDialog
        isOpen={isCreateDialogOpen}
        onClose={toggleCreateDialog}
      />
      <OffersTable offers={offers} />
    </div>
  );
};
