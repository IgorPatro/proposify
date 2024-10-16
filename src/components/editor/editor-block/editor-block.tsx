import { useDndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import React, { useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

import { EditorBlockDroppableArea } from "./editor-block-droppable-area";
import { EditorBlockMenu } from "./editor-block-menu";
import { BlockName } from "@/_blocks/types";
import { useSelectedBlockUuid } from "../atoms";

interface EditorBlockProps {
  renderBlock: JSX.Element;
  blockUuid: string;
  blockName: BlockName;
}

export const EditorBlock = ({
  blockUuid,

  renderBlock,
  blockName,
}: EditorBlockProps) => {
  const { active: globalActive } = useDndContext();
  const { isOver: isDraggedOver, setNodeRef: setDroppableRef } = useDroppable({
    id: blockUuid,
  });
  const {
    active,
    listeners,
    setNodeRef: setDraggableRef,
  } = useDraggable({
    data: {
      blockName,
      isNewBlock: false,
      uuid: blockUuid,
    },
    id: blockUuid,
  });
  const [selectedBlockUuid, setSelectedBlockUuid] = useSelectedBlockUuid();

  const isDragged = useMemo(() => {
    return active?.id === blockUuid;
  }, [active?.id, blockUuid]);
  const isSelected = selectedBlockUuid === blockUuid;

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
      onClick={() => setSelectedBlockUuid(blockUuid)}
    >
      <EditorBlockDroppableArea isDraggedOver={isDraggedOver} />
      <div ref={setDroppableRef}>{renderBlock}</div>
      {!globalActive ? (
        <EditorBlockMenu isSelected={isSelected} blockUuid={blockUuid} />
      ) : null}
      <div
        className={twMerge(
          "absolute left-0 top-0 h-full w-full bg-black/50",
          getOverlayStyles(isSelected, !!globalActive),
        )}
      />
    </section>
  );
};

export const getOverlayStyles = (isSelected: boolean, isDragMode: boolean) => {
  if (isDragMode) {
    return "hidden";
  }

  return isSelected ? "hidden" : "block";
};
