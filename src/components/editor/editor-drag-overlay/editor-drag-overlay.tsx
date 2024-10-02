import { DragOverlay } from "@dnd-kit/core";
import { snapCenterToCursor } from "@dnd-kit/modifiers";
import React from "react";

import { EditorDraggableBlock } from "@/components/sidebar/editor-sidebar/editor-sidebar-blocks/editor-draggable-block";

import { type DraggedBlock } from "../types";
import { isDraggedBlockNew } from "../utils";

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

    return (
      <div className="h-10 w-full bg-red-500 text-white">
        {draggedBlock.uuid}
      </div>
    );
  };

  return (
    <DragOverlay dropAnimation={null} modifiers={[snapCenterToCursor]}>
      {renderDraggedOverlay()}
    </DragOverlay>
  );
};
