import { useDraggable } from "@dnd-kit/core";
import React from "react";

export const EditorDraggableBlock = ({ blockName }: { blockName: string }) => {
  const { listeners, setNodeRef: setDraggableRef } = useDraggable({
    data: {
      blockName,
      isNewBlock: true,
    },
    id: blockName,
  });

  return (
    <div
      className="flex h-10 w-24 cursor-pointer items-center justify-center bg-black text-white"
      ref={setDraggableRef}
      {...listeners}
    >
      {blockName}
    </div>
  );
};
