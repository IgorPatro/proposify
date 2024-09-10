import { type ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

import { type MinifiedTemplate } from "@/server/api/template/types";
import { formatDateToDayMonthYear } from "@/utils/date";
import { getEditorTemplateHref } from "@/utils/hrefs/editor";

export const TEMPLATE_COLUMNS: ColumnDef<MinifiedTemplate>[] = [
  {
    accessorKey: "name",
    cell: ({ row }) => <span>{row.getValue("name")}</span>,
    header: "Name",
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
            href={getEditorTemplateHref(row.getValue("uuid"))}
          >
            Edit
          </Link>
        </div>
      );
    },
    header: () => <div className="text-right">Actions</div>,
  },
];
