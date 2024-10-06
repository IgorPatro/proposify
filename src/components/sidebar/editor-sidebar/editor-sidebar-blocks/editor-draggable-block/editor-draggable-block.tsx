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
      className="flex aspect-video w-full cursor-pointer items-center justify-center truncate rounded-lg bg-white text-black shadow-lg"
      ref={setDraggableRef}
      {...listeners}
    >
      {blockName}
    </div>
  );
};
