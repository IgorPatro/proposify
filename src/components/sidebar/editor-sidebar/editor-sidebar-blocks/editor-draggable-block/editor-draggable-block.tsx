import { BlockName } from "@/_blocks/types";
import { getBlockIcon } from "@/_blocks/utils";
import { useDraggable } from "@dnd-kit/core";
import React from "react";

interface EditorDraggableBlockProps {
  blockName: BlockName;
}

export const EditorDraggableBlock = ({
  blockName,
}: EditorDraggableBlockProps) => {
  const { listeners, setNodeRef: setDraggableRef } = useDraggable({
    data: {
      blockName,
      isNewBlock: true,
    },
    id: blockName,
  });

  return (
    <div className="cursor-grab" ref={setDraggableRef} {...listeners}>
      {getBlockIcon(blockName)}
    </div>
  );
};
