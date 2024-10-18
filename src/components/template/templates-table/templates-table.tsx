import Image from "next/image";
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
import { getEditorTemplateHref } from "@/utils/hrefs/editor";

const HEADERS = ["", "Nazwa", "Data stworzenia", "Ostatnia edycja", ""];

export const TemplatesTable = () => {
  const { data: templates, error, isLoading } = api.template.getAll.useQuery();

  // Note: Reload the page to enable dark mode in the editor
  const onMoveToEditor = (templateUuid: string) => {
    window.open(getEditorTemplateHref(templateUuid));
  };

  if (!templates || templates.length === 0) {
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
                alt="Template thumbnail"
                className="rounded-lg"
                height={50}
                objectFit="cover"
                src="https://picsum.photos/70/50"
                width={70}
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
                    <HiDotsHorizontal className="size-4" />
                    <span className="sr-only">Menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Akcje</DropdownMenuLabel>
                  <DropdownMenuItem
                    onClick={() => onMoveToEditor(template.uuid)}
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
