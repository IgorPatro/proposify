"use client";

import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import React from "react";

import { EditorSidebar } from "@/components/sidebar/editor-sidebar";
import { type Template } from "@/server/api/template/types";

import { POINTER_SENSOR_CONSTRAINTS_DISTANCE } from "./constants";
import { EditorBlocksRenderer } from "./editor-blocks-renderer";
import { EditorDragOverlay } from "./editor-drag-overlay";
import { useManageBlocks } from "./hooks";
import { useEditorStore } from "./store";
import { fixCursorSnapOffset } from "./utils";

interface EditorProps {
  resourceUuid: string;
  resource: Template;
}

export const Editor = ({ resource, resourceUuid }: EditorProps) => {
  const updateTemplate = useEditorStore((store) => store.updateEditorState);

  React.useEffect(() => {
    if (!resource) return;
    updateTemplate(resource);
  }, [resource, updateTemplate]);

  const [selectedBlockUuid, setSelectedBlockUuid] = React.useState<string>("");
  const { draggedBlock, handleDragEnd, handleDragStart } = useManageBlocks();

  const onSelectBlock = (blockUuid: string) => {
    setSelectedBlockUuid(blockUuid);
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: POINTER_SENSOR_CONSTRAINTS_DISTANCE,
      },
    }),
  );

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      collisionDetection={fixCursorSnapOffset}
    >
      <div className="flex w-full">
        <EditorSidebar
          selectedBlockUuid={selectedBlockUuid}
          resourceUuid={resourceUuid}
        />
        <EditorBlocksRenderer
          selectedBlockUuid={selectedBlockUuid}
          onSelectBlock={onSelectBlock}
          draggedBlock={draggedBlock}
        />
        <EditorDragOverlay draggedBlock={draggedBlock} />
      </div>
    </DndContext>
  );
};
