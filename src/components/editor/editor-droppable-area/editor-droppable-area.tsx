import { useDroppable } from "@dnd-kit/core";
import React from "react";

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
        className="flex h-32 w-full cursor-pointer items-center justify-center bg-black text-white"
        ref={setDroppableRef}
      >
        Drop here - {isOver ? "over" : "not over"}
      </div>
    );
  }

  return null;
};
