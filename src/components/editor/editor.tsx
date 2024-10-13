import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import React from "react";

import { OfferEditorSidebar } from "@/components/sidebar/editor-sidebar/offer-editor-sidebar/offer-editor-sidebar";
import { TemplateEditorSidebar } from "@/components/sidebar/editor-sidebar/template-editor-sidebar";

import { POINTER_SENSOR_CONSTRAINTS_DISTANCE } from "./constants";
import { EditorBlocksRenderer } from "./editor-blocks-renderer";
import { EditorDragOverlay } from "./editor-drag-overlay";
import { useManageBlocks } from "./hooks";
import { useEditorStore } from "./store";
import { fixCursorSnapOffset } from "./utils";
import { Resource } from "@/server/api/resource/types";

interface EditorProps {
  resource: Resource | undefined;
  isOffer?: boolean;
  isLoading: boolean;
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      collisionDetection={fixCursorSnapOffset}
    >
      <div className="flex w-full">
        {isOffer ? (
          <OfferEditorSidebar selectedBlockUuid={selectedBlockUuid} />
        ) : (
          <TemplateEditorSidebar selectedBlockUuid={selectedBlockUuid} />
        )}
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
