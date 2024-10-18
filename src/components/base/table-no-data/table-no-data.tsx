import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TableNoDataProps {
  error?: string;
  headers: string[];
  isLoading: boolean;
}

export const TableNoData = ({
  error,
  headers,
  isLoading,
}: TableNoDataProps) => {
  if (isLoading) {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            {headers.map((header) => (
              <TableHead key={header}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 2, 3, 4, 5].map((ghost) => (
            <TableRow key={ghost}>
              {headers.map((row) => (
                <TableCell key={row}>
                  <div className="h-6 w-full max-w-40 animate-pulse rounded-lg bg-gray-100" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headers.map((header) => (
            <TableHead key={header}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="h-64 text-center" colSpan={headers.length}>
            {error ? "Wystąpił błąd podczas ładowania danych" : "Brak danych"}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
