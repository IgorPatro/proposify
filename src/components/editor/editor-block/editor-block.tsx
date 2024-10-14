import { useDraggable, useDroppable } from "@dnd-kit/core";
import React, { useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

import { EditorBlockDroppableArea } from "./editor-block-droppable-area";
import { EditorBlockMenu } from "./editor-block-menu";

interface EditorBlockProps {
  renderBlock: JSX.Element;
  blockUuid: string;
  isSelected: boolean;
  onSelectBlock: (blockUuid: string) => void;
}

export const EditorBlock = ({
  blockUuid,
  isSelected,
  onSelectBlock,
  renderBlock,
}: EditorBlockProps) => {
  const { isOver: isDraggedOver, setNodeRef: setDroppableRef } = useDroppable({
    id: blockUuid,
  });
  const {
    active,
    listeners,
    setNodeRef: setDraggableRef,
  } = useDraggable({
    data: {
      isNewBlock: false,
      uuid: blockUuid,
    },
    id: blockUuid,
  });

  const isDragged = useMemo(() => {
    return active?.id === blockUuid;
  }, [active?.id, blockUuid]);

  if (isDragged) {
    return null;
  }

  return (
    <section
      ref={setDraggableRef}
      {...listeners}
      className={twMerge(
        "relative w-full",
        isDragged ? "invisible" : "visible",
      )}
      onClick={() => onSelectBlock(blockUuid)}
    >
      <EditorBlockDroppableArea isDraggedOver={isDraggedOver} />
      <div ref={setDroppableRef}>{renderBlock}</div>
      <EditorBlockMenu isSelected={isSelected} blockUuid={blockUuid} />
      <div
        className={twMerge(
          "absolute left-0 top-0 h-full w-full bg-black/50",
          isSelected ? "hidden" : "block",
        )}
      />
    </section>
  );
};
