import { DragOverlay } from "@dnd-kit/core";
import { snapCenterToCursor } from "@dnd-kit/modifiers";
import React from "react";

import { EditorDraggableBlock } from "@/components/sidebar/editor-sidebar/editor-sidebar-blocks/editor-draggable-block";

import { type DraggedBlock } from "../types";
import { isDraggedBlockNew } from "../utils";
import { getBlockIcon } from "@/_blocks/utils";

interface EditorDragOverlayProps {
  draggedBlock: DraggedBlock | null;
}

export const EditorDragOverlay = ({ draggedBlock }: EditorDragOverlayProps) => {
  const renderDraggedOverlay = () => {
    if (!draggedBlock) {
      return null;
    }

    if (isDraggedBlockNew(draggedBlock)) {
      return <EditorDraggableBlock blockName={draggedBlock.blockName} />;
    }

    const Icon = getBlockIcon(draggedBlock.blockName);

    return (
      <div className="aspect-video w-96 cursor-grabbing bg-black text-white">
        <Icon className="h-full w-full bg-gray-900 text-gray-500" />
      </div>
    );
  };

  return (
    <DragOverlay dropAnimation={null} modifiers={[snapCenterToCursor]}>
      {renderDraggedOverlay()}
    </DragOverlay>
  );
};
