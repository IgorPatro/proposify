import { useRouter } from "next/router";
import * as React from "react";
import { HiDotsHorizontal } from "react-icons/hi";

import { TableNoData } from "@/components/base/table-no-data";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { type MinifiedOffer } from "@/server/api/offer/types";
import { formatDateToDayShortMonthYear } from "@/utils/date";
import { getEditorOfferHref } from "@/utils/hrefs/editor";

interface OffersTableProps {
  offers?: MinifiedOffer[];
}

const HEADERS = [
  "Nazwa",
  "Klient",
  "Email/Telefon",
  "Data stworzenia",
  "Status",
  "",
];

export const OffersTable = ({ offers }: OffersTableProps) => {
  const { push } = useRouter();

  if (!offers || offers.length === 0) {
    return <TableNoData headers={HEADERS} />;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nazwa</TableHead>
          <TableHead>Klient</TableHead>
          <TableHead>Email/Telefon</TableHead>
          <TableHead>Data stworzenia</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="w-24"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {offers.map((offer) => (
          <TableRow key={offer.uuid}>
            <TableCell>{offer.name}</TableCell>
            <TableCell className="underline">
              {offer.customer.firstName} {offer.customer.lastName}
            </TableCell>
            <TableCell>
              {offer.customer.email ?? offer.customer.phone}
            </TableCell>
            <TableCell>
              {formatDateToDayShortMonthYear(offer.createdAt)}
            </TableCell>
            <TableCell>-</TableCell>
            <TableCell className="w-fit">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button aria-haspopup="true" size="icon" variant="ghost">
                    <HiDotsHorizontal className="h-4 w-4" />
                    <span className="sr-only">Menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Akcje</DropdownMenuLabel>
                  <DropdownMenuItem
                    onClick={() => push(getEditorOfferHref(offer.uuid))}
                  >
                    Edytuj
                  </DropdownMenuItem>
                  <DropdownMenuItem>Usuń</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
