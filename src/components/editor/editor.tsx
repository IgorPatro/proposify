import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import React from "react";

import { OfferEditorSidebar } from "@/components/sidebar/editor-sidebar/offer-editor-sidebar/offer-editor-sidebar";
import { TemplateEditorSidebar } from "@/components/sidebar/editor-sidebar/template-editor-sidebar";
import { type Resource } from "@/server/api/resource/types";

import { SelectedBlockSidebar } from "../sidebar/editor-sidebar/selected-block-sidebar";

import { POINTER_SENSOR_CONSTRAINTS_DISTANCE } from "./constants";
import { EditorBlocksRenderer } from "./editor-blocks-renderer";
import { EditorDragOverlay } from "./editor-drag-overlay";
import { useManageBlocks } from "./hooks";
import { useEditorStore } from "./store";
import { fixCursorSnapOffset } from "./utils";

interface EditorProps {
  isLoading: boolean;
  isOffer?: boolean;
  resource: Resource | undefined;
}

export const Editor = ({
  isLoading,
  isOffer = false,
  resource,
}: EditorProps) => {
  const updateResource = useEditorStore((store) => store.updateEditorState);

  React.useEffect(() => {
    if (!resource) return;
    updateResource(resource);
  }, [resource, updateResource]);

  const { draggedBlock, handleDragEnd, handleDragStart } = useManageBlocks();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: POINTER_SENSOR_CONSTRAINTS_DISTANCE,
      },
    }),
  );

  if (isLoading) {
    return <div className="">Loading...</div>;
  }

  return (
    <DndContext
      collisionDetection={fixCursorSnapOffset}
      sensors={sensors}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
      <div className="flex w-full">
        {isOffer ? <OfferEditorSidebar /> : <TemplateEditorSidebar />}
        <EditorBlocksRenderer draggedBlock={draggedBlock} />
        <EditorDragOverlay draggedBlock={draggedBlock} />
        <SelectedBlockSidebar />
      </div>
    </DndContext>
  );
};
