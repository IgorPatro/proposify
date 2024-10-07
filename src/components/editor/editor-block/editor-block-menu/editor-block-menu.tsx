import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useEditorStore } from "../../store";

interface EditorBlockMenuProps {
  isSelected: boolean;
  blockUuid: string;
}

export const EditorBlockMenu = ({
  blockUuid,
  isSelected,
}: EditorBlockMenuProps) => {
  const removeBlock = useEditorStore((store) => store.removeBlock);

  if (!isSelected) {
    return null;
  }

  return (
    <div className="absolute right-4 top-4 flex gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="h-8 w-8 rounded-full"
            aria-haspopup="true"
            size="icon"
            variant="ghost"
          >
            <HiDotsHorizontal className="h-4 w-4" />
            <span className="sr-only">Menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Akcje</DropdownMenuLabel>
          <DropdownMenuItem
            className="flex items-center gap-2"
            onClick={() => removeBlock(blockUuid)}
          >
            Usuń
            <FaTrashAlt className="h-4 w-4 text-red-500" />
          </DropdownMenuItem>
          <DropdownMenuItem>Duplikuj</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
