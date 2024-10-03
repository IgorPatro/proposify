import { type ColumnDef } from "@tanstack/react-table";

import { type MinifiedCustomer } from "@/server/api/customer/types";
import { formatDateToDayMonthYear } from "@/utils/date";

export const CUSTOMERS_COLUMNS: ColumnDef<MinifiedCustomer>[] = [
  {
    accessorFn: (data) => `${data.firstName} ${data.lastName}`,
    header: "Imię i nazwisko",
  },
  {
    accessorFn: (data) => data.email,
    header: "Email",
  },
  {
    accessorFn: (data) => data.phone,
    header: "Telefon",
  },
  {
    accessorKey: "createdAt",
    cell: ({ row }) => (
      <span>{formatDateToDayMonthYear(row.getValue("createdAt"))}</span>
    ),
    header: "Utworzono",
  },
  {
    accessorKey: "updatedAt",
    cell: ({ row }) => (
      <span>{formatDateToDayMonthYear(row.getValue("updatedAt"))}</span>
    ),
    header: "Edytowano",
  },
  {
    accessorKey: "uuid",
    cell: () => {
      return (
        <div className="flex justify-end">
          <button className="w-fit cursor-pointer">Edit</button>
        </div>
      );
    },
    header: () => <div className="text-right">Akcje</div>,
  },
];
