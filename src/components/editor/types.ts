import { z } from "zod";

import { BlockNameEnum } from "@/_blocks/types";

export const DraggedNewBlockSchema = z.object({
  blockName: BlockNameEnum,
  isNewBlock: z.literal(true),
});
export type DraggedNewBlock = z.infer<typeof DraggedNewBlockSchema>;

export const DraggedExistingBlockSchema = z.object({
  blockName: BlockNameEnum,
  isNewBlock: z.literal(false),
  uuid: z.string(),
});
export type DraggedExistingBlock = z.infer<typeof DraggedExistingBlockSchema>;

export const DraggedBlockSchema = DraggedNewBlockSchema.or(
  DraggedExistingBlockSchema,
);
export type DraggedBlock = z.infer<typeof DraggedBlockSchema>;
