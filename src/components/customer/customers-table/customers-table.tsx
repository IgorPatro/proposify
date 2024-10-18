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
import { api } from "@/utils/api";
import { formatDateToDayShortMonthYear } from "@/utils/date";

const HEADERS = ["Imię i nazwisko", "Email", "Telefon", "Utworzono", "Akcje"];

export const CustomersTable = () => {
  const {
    data: customers,
    error,
    isLoading,
  } = api.customer.getAllCustomersMinified.useQuery();

  if (!customers || customers.length === 0) {
    return (
      <TableNoData
        error={error?.message}
        headers={HEADERS}
        isLoading={isLoading}
      />
    );
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
                    <HiDotsHorizontal className="size-4" />
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
