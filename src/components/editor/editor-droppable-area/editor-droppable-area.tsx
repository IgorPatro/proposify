import { useDroppable } from "@dnd-kit/core";
import React from "react";
import { twMerge } from "tailwind-merge";

import { DROPPABLE_AREA_BOTTOM_ID } from "../constants";
import { useEditorStore } from "../store";
import { type DraggedBlock } from "../types";

interface EditorDroppableAreaProps {
  draggedBlock: DraggedBlock | null;
}

export const EditorDroppableArea = ({
  draggedBlock,
}: EditorDroppableAreaProps) => {
  const blocks = useEditorStore((state) => state.blocks);
  const { isOver, setNodeRef: setDroppableRef } = useDroppable({
    id: DROPPABLE_AREA_BOTTOM_ID,
  });

  if (!!draggedBlock || blocks.length === 0) {
    return (
      <div
        className={twMerge(
          "flex h-32 w-full bg-black p-4 text-white",
          isOver ? "opacity-100" : "opacity-0",
        )}
        ref={setDroppableRef}
      >
        Upuść tutaj, aby dodać blok w tym miejscu
      </div>
    );
  }

  return null;
};
