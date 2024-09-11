import { type ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

import { type MinifiedOffer } from "@/server/api/offer/types";
import { formatDateToDayMonthYear } from "@/utils/date";
import { getEditorOfferHref } from "@/utils/hrefs/editor";

export const OFFER_COLUMNS: ColumnDef<MinifiedOffer>[] = [
  {
    accessorFn: (data) => data.name,
    header: "Name",
  },
  {
    accessorFn: (data) =>
      `${data.customer.firstName} ${data.customer.lastName}`,
    header: "Customer",
  },
  {
    accessorFn: (data) => data.customer.email ?? data.customer.phone,
    header: "Email / Phone",
  },
  {
    accessorFn: (data) => formatDateToDayMonthYear(data.createdAt),
    header: "Created at",
  },
  {
    accessorFn: (data) => formatDateToDayMonthYear(data.updatedAt),
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
