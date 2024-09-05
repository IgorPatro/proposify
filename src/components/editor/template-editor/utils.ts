import { type CollisionDetection, rectIntersection } from "@dnd-kit/core";

import { DROPPABLE_AREA_BOTTOM_ID } from "./constants";
import {
  type DraggedExistingBlock,
  DraggedExistingBlockSchema,
  type DraggedNewBlock,
  DraggedNewBlockSchema,
} from "./types";

export const isDraggedBlockNew = (
  draggedBlock: unknown,
): draggedBlock is DraggedNewBlock => {
  return DraggedNewBlockSchema.safeParse(draggedBlock).success;
};

export const isDraggedBlockExisting = (
  draggedBlock: unknown,
): draggedBlock is DraggedExistingBlock => {
  return DraggedExistingBlockSchema.safeParse(draggedBlock).success;
};

export const isDroppableAreaBottom = (area: string) => {
  return area === DROPPABLE_AREA_BOTTOM_ID;
};

// Reference: https://github.com/clauderic/dnd-kit/pull/334#issuecomment-1965708784
export const fixCursorSnapOffset: CollisionDetection = (args) => {
  if (!args.pointerCoordinates) {
    return rectIntersection(args);
  }
  const { x, y } = args.pointerCoordinates;
  const { height, width } = args.collisionRect;
  const updated = {
    ...args,

    collisionRect: {
      bottom: y + height / 2,
      height,
      left: x - width / 2,
      right: x + width / 2,
      top: y - height / 2,
      width,
    },
  };

  return rectIntersection(updated);
};
