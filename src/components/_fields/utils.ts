import { type ButtonFieldConfig } from "./button-field/type";
import { type ImageFieldConfig } from "./image-field/type";
import { type TextFieldConfig } from "./text-field/type";
import { type FieldConfig } from "./types";

export const isFieldConfigText = (
  fieldConfig: FieldConfig | null | undefined,
): fieldConfig is TextFieldConfig => {
  if (!fieldConfig) return false;
  return fieldConfig.type === "text";
};

export const isFieldConfigButton = (
  fieldConfig: FieldConfig | null | undefined,
): fieldConfig is ButtonFieldConfig => {
  if (!fieldConfig) return false;
  return fieldConfig.type === "button";
};

export const isFieldConfigImage = (
  fieldConfig: FieldConfig | null | undefined,
): fieldConfig is ImageFieldConfig => {
  if (!fieldConfig) return false;
  return fieldConfig.type === "image";
};
