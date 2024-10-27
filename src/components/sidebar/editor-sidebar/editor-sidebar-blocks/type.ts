import { z } from "zod";

export const BLOCK_TYPES_MAP = ["hero", "footer", "about"] as const;
export const BlockTypeEnum = z.enum(BLOCK_TYPES_MAP);
export type BlockType = z.infer<typeof BlockTypeEnum>;
