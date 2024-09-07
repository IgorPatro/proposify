import { MinifiedOffer } from "@/query/get-all-offers-minified";
import { formatDateToDayMonthYear } from "@/utils/date";
import { getEditorTemplateHref } from "@/utils/hrefs/editor";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const COLUMNS: ColumnDef<MinifiedOffer>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <span>{row.getValue("name")}</span>,
  },
  {
    accessorKey: "customer",
    header: "Customer",
    cell: ({ row }) => (
      <span>{`${row.getValue("customer.firstName")} ${row.getValue("customer.lastName")}`}</span>
    ),
  },
  {
    accessorKey: "customer",
    header: "Email",
    cell: ({ row }) => <span>{row.getValue("customer.email")}</span>,
  },
  {
    accessorKey: "createdAt",
    header: "Created at",
    cell: ({ row }) => (
      <span>{formatDateToDayMonthYear(row.getValue("createdAt"))}</span>
    ),
  },
  {
    accessorKey: "updatedAt",
    header: "Last update",
    cell: ({ row }) => (
      <span>{formatDateToDayMonthYear(row.getValue("updatedAt"))}</span>
    ),
  },
  {
    accessorKey: "uuid",
    header: () => <div className="text-right">Actions</div>,
    cell: ({ row }) => {
      return (
        <div className="flex justify-end">
          <Link
            className="w-fit"
            href={getEditorTemplateHref(row.getValue("uuid"))}
          >
            Edit
          </Link>
        </div>
      );
    },
  },
];
