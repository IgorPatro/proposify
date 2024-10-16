import {
  type DragEndEvent,
  type DragStartEvent,
  type Over,
} from "@dnd-kit/core";
import { useCallback, useState } from "react";

import { type Block, type BlockName } from "@/_blocks/types";
import { getBlockDefaultFieldsByName } from "@/_blocks/utils";

import { useEditorStore } from "./store";
import { type DraggedBlock } from "./types";
import { isDraggedBlockNew, isDroppableAreaBottom } from "./utils";
import { generateUuid } from "@/utils/uuid";
import { useSelectedBlockUuid } from "./atoms";

export const useManageBlocks = () => {
  const updateBlocks = useEditorStore((store) => store.updateBlocks);
  const blocks = useEditorStore((store) => store.blocks);
  const [, setSelectedBlockUuid] = useSelectedBlockUuid();

  const [draggedBlock, setDraggedBlock] = useState<DraggedBlock | null>(null);

  const handleAddNewBlock = useCallback(
    (blockName: BlockName, over: Over) => {
      const newBlockFields = getBlockDefaultFieldsByName(blockName);
      const newBlock: Block = {
        fields: newBlockFields,
        name: blockName,
        uuid: generateUuid(),
      };

      if (isDroppableAreaBottom(over.id as string)) {
        const newBlocks = [...blocks, newBlock];
        return updateBlocks(newBlocks);
      }

      const dragEndBlockIndex = blocks.findIndex(
        (item) => item.uuid === over.id,
      );
      const newBlocks = [
        ...blocks.slice(0, dragEndBlockIndex),
        newBlock,
        ...blocks.slice(dragEndBlockIndex),
      ];
      setSelectedBlockUuid(newBlock.uuid);
      return updateBlocks(newBlocks);
    },
    [blocks, updateBlocks],
  );

  const handleMoveBlock = useCallback(
    (blockUuid: string, over: Over) => {
      const draggedBlock = blocks.find((block) => block.uuid === blockUuid);
      const temporaryBlocks = blocks.filter(
        (block) => block.uuid !== blockUuid,
      );

      if (!draggedBlock) {
        return;
      }

      if (isDroppableAreaBottom(over.id as string)) {
        const newBlocks = [...temporaryBlocks, draggedBlock];
        return updateBlocks(newBlocks);
      }

      const dragEndBlockIndex = temporaryBlocks.findIndex(
        (item) => item.uuid === over.id,
      );
      const newBlocks = [
        ...temporaryBlocks.slice(0, dragEndBlockIndex),
        draggedBlock,
        ...temporaryBlocks.slice(dragEndBlockIndex),
      ];
      setSelectedBlockUuid(draggedBlock.uuid);
      return updateBlocks(newBlocks);
    },
    [blocks, updateBlocks],
  );

  const handleDragStart = useCallback(
    (event: DragStartEvent) => {
      const blockData = event.active.data.current;
      return setDraggedBlock(blockData as DraggedBlock);
    },
    [setDraggedBlock],
  );

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;
      setDraggedBlock(null);

      if (!over) {
        return;
      }

      if (isDraggedBlockNew(draggedBlock)) {
        return handleAddNewBlock(draggedBlock.blockName as BlockName, over);
      }

      return handleMoveBlock(active.id as string, over);
    },
    [draggedBlock, setDraggedBlock, handleMoveBlock, handleAddNewBlock],
  );

  return {
    draggedBlock,
    handleDragEnd,
    handleDragStart,
  };
};
