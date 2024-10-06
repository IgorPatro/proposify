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
import { type MinifiedCustomer } from "@/server/api/customer/types";
import { formatDateToDayShortMonthYear } from "@/utils/date";

interface CustomersTableProps {
  customers?: MinifiedCustomer[];
}

const HEADERS = ["Imię i nazwisko", "Email", "Telefon", "Utworzono", "Akcje"];

export const CustomersTable = ({ customers }: CustomersTableProps) => {
  if (!customers || customers.length === 0) {
    return <TableNoData headers={HEADERS} />;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Imię i nazwisko</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Telefon</TableHead>
          <TableHead>Utworzono</TableHead>
          <TableHead className="w-24"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {customers.map((customer) => (
          <TableRow key={customer.uuid}>
            <TableCell>
              {customer.firstName} {customer.lastName}
            </TableCell>
            <TableCell>{customer.email}</TableCell>
            <TableCell>{customer.phone}</TableCell>
            <TableCell>
              {formatDateToDayShortMonthYear(customer.createdAt)}
            </TableCell>
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
                  <DropdownMenuItem>Edytuj</DropdownMenuItem>
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
