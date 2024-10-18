import { useDraggable } from "@dnd-kit/core";
import React from "react";

import { type BlockName } from "@/_blocks/types";
import { getBlockIcon } from "@/_blocks/utils";

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

  const Icon = getBlockIcon(blockName);

  return (
    <div className="w-full cursor-grab" ref={setDraggableRef} {...listeners}>
      <Icon className="size-full rounded-sm bg-gray-900 text-gray-500 hover:bg-gray-800" />
    </div>
  );
};
