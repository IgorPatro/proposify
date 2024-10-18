import { useDndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import React, { useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

import { type BlockName } from "@/_blocks/types";

import { useSelectedBlockUuid } from "../atoms";

import { EditorBlockDroppableArea } from "./editor-block-droppable-area";
import { EditorBlockMenu } from "./editor-block-menu";

interface EditorBlockProps {
  blockName: BlockName;
  blockUuid: string;
  renderBlock: JSX.Element;
}

export const EditorBlock = ({
  blockName,

  blockUuid,
  renderBlock,
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
        <EditorBlockMenu blockUuid={blockUuid} isSelected={isSelected} />
      ) : null}
      <div
        className={twMerge(
          "absolute left-0 top-0 size-full bg-black/50",
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
