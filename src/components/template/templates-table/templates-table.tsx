import Image from "next/image";
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
import { type MinifiedTemplate } from "@/server/api/template/types";
import { formatDateToDayShortMonthYear } from "@/utils/date";
import { getEditorTemplateHref } from "@/utils/hrefs/editor";

interface TemplatesTableProps {
  templates?: MinifiedTemplate[];
}

const HEADERS = ["", "Nazwa", "Data stworzenia", "Ostatnia edycja", ""];

export const TemplatesTable = ({ templates }: TemplatesTableProps) => {
  const { push } = useRouter();

  if (!templates || templates.length === 0) {
    return <TableNoData headers={HEADERS} />;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {/* <TableHead className="w-24"></TableHead> */}
          <TableHead>Nazwa</TableHead>
          <TableHead>Data stworzenia</TableHead>
          <TableHead>Ostatnia edycja</TableHead>
          <TableHead className="w-24"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {templates.map((template) => (
          <TableRow key={template.uuid}>
            <TableCell className="flex h-fit items-center gap-4">
              <Image
                src="https://picsum.photos/70/50"
                alt="Template thumbnail"
                width={70}
                height={50}
                objectFit="cover"
                className="rounded-lg"
              />
              {template.name}
            </TableCell>
            <TableCell>
              {formatDateToDayShortMonthYear(template.createdAt)}
            </TableCell>
            <TableCell>
              {formatDateToDayShortMonthYear(template.updatedAt)}
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
                  <DropdownMenuItem
                    onClick={() => push(getEditorTemplateHref(template.uuid))}
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
