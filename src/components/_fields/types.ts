import { z } from "zod";

import { ButtonFieldConfigSchema } from "./button-field/type";
import { ImageFieldConfigSchema } from "./image-field/type";
import { TextFieldConfigSchema } from "./text-field/type";

export const FieldConfigSchema = z.union([
  TextFieldConfigSchema,
  ButtonFieldConfigSchema,
  ImageFieldConfigSchema,
]);

export type FieldConfig = z.infer<typeof FieldConfigSchema>;
