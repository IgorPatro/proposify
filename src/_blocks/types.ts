import { z } from "zod";

import { type ThemeEnum } from "@/server/api/resource/types";

import { FieldConfigSchema } from "../_fields/types";

// -------------------- BLOCK NAMES --------------------
export const BLOCK_NAMES_MAP = [
  "hero_simple_centered",
  "hero_simple_left",
  "footer_simple_left",
  "about_simple_left",
] as const;
export const BlockNameEnum = z.enum(BLOCK_NAMES_MAP);
export type BlockName = z.infer<typeof BlockNameEnum>;

// -------------------- BLOCK FIELDS --------------------
export const BlockFieldsSchema = z.record(FieldConfigSchema);
export type BlockFields = z.infer<typeof BlockFieldsSchema>;

// -------------------- BLOCK BACKGROUND --------------------
export const BackgroundTypeEnum = z.enum([
  "color",
  "image",
  "gradient",
  "video",
  "initial",
]);
export type BackgroundType = z.infer<typeof BackgroundTypeEnum>;

export const BackgroundSchema = z.object({
  alt: z.string().nullish(),
  color: z.string().nullish(),
  type: BackgroundTypeEnum,
  url: z.string().nullish(),
});
export type Background = z.infer<typeof BackgroundSchema>;

// -------------------- BLOCK GLOBAL DATA --------------------
export const BlockResourceDataSchema = z.object({
  logoUrl: z.string().nullish(),
});
export type BlockResourceData = z.infer<typeof BlockResourceDataSchema>;

// -------------------- BLOCK GLOBAL TYPES --------------------
export const BlockSchema = z.object({
  background: BackgroundSchema,
  fields: BlockFieldsSchema,
  name: BlockNameEnum,
  uuid: z.string(),
});

export type Block = z.infer<typeof BlockSchema>;

export type BlockComponent = ({
  background,
  fields,
  resource,
  themeEnum,
}: {
  background: Background;
  fields: BlockFields;
  resource: BlockResourceData;
  themeEnum: ThemeEnum;
}) => JSX.Element;

export interface BlockProps {
  background: Background;
  fields: BlockFields;
  resource: BlockResourceData;
  themeEnum: ThemeEnum;
}
