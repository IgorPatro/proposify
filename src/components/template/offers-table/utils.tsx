import { type ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

import { type MinifiedOffer } from "@/server/api/offer/types";
import { formatDateToDayMonthYear } from "@/utils/date";
import { getEditorOfferHref } from "@/utils/hrefs/editor";

export const OFFER_COLUMNS: ColumnDef<MinifiedOffer>[] = [
  {
    accessorKey: "name",
    cell: ({ row }) => <span>{row.getValue("name")}</span>,
    header: "Name",
  },
  {
    accessorKey: "customer",
    cell: ({ row }) => (
      <span>{`${row.getValue("customer.firstName")} ${row.getValue("customer.lastName")}`}</span>
    ),
    header: "Customer",
  },
  {
    accessorKey: "customer",
    cell: ({ row }) => <span>{row.getValue("customer.email")}</span>,
    header: "Email",
  },
  {
    accessorKey: "createdAt",
    cell: ({ row }) => (
      <span>{formatDateToDayMonthYear(row.getValue("createdAt"))}</span>
    ),
    header: "Created at",
  },
  {
    accessorKey: "updatedAt",
    cell: ({ row }) => (
      <span>{formatDateToDayMonthYear(row.getValue("updatedAt"))}</span>
    ),
    header: "Last update",
  },
  {
    accessorKey: "uuid",
    cell: ({ row }) => {
      return (
        <div className="flex justify-end">
          <Link
            className="w-fit"
            href={getEditorOfferHref(row.getValue("uuid"))}
          >
            Edit
          </Link>
        </div>
      );
    },
    header: () => <div className="text-right">Actions</div>,
  },
];
