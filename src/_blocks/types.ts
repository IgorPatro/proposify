import { z } from "zod";

import { FieldConfigSchema } from "../_fields/types";
import { ThemeEnum } from "@/server/api/resource/types";

export const BLOCK_NAMES_MAP = [
  "hero_simple_centered",
  "hero_simple_left",
  "footer_simple_left",
  "about_simple_left",
] as const;
export const BlockNameEnum = z.enum(BLOCK_NAMES_MAP);
export type BlockName = z.infer<typeof BlockNameEnum>;

export const BlockFieldsSchema = z.record(FieldConfigSchema);
export type BlockFields = z.infer<typeof BlockFieldsSchema>;

export const BlockSchema = z.object({
  fields: BlockFieldsSchema,
  name: BlockNameEnum,
  uuid: z.string(),
});

export type Block = z.infer<typeof BlockSchema>;

export type BlockComponent = ({
  fields,
  themeEnum,
}: {
  themeEnum: ThemeEnum;
  fields: BlockFields;
}) => JSX.Element;

export interface BlockProps {
  fields: BlockFields;
  themeEnum: ThemeEnum;
}
