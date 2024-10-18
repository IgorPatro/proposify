import Link from "next/link";
import React from "react";
import { HiPlus } from "react-icons/hi2";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToggle } from "@/hooks/use-toggle";
import { getDashboardTemplatesHref } from "@/utils/hrefs/dashboard";

import { OfferCreateDialog } from "../offer-create-dialog";
import { OffersTable } from "../offers-table";

export const PageOffers = () => {
  const [isCreateDialogOpen, toggleCreateDialog] = useToggle();

  return (
    <Card>
      <CardHeader>
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-2">
            <CardTitle>Oferty</CardTitle>
            <CardDescription className="max-w-3/4">
              Stwórz ofertę, którą później będziesz mógł wysłać do klienta.
              Pamiętaj, że do stworzenia ofery potrzebujesz{" "}
              <Link className="underline" href={getDashboardTemplatesHref()}>
                szablonu
              </Link>
              .
            </CardDescription>
          </div>
          <Button className="w-fit" onClick={toggleCreateDialog}>
            <HiPlus className="mr-2 size-5" />
            Nowa oferta
          </Button>
        </div>
      </CardHeader>
      <OfferCreateDialog
        isOpen={isCreateDialogOpen}
        onClose={toggleCreateDialog}
      />
      <CardContent>
        <OffersTable />
      </CardContent>
    </Card>
  );
};
