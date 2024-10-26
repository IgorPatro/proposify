import { z } from "zod";

import { TextFieldConfigSchema } from "@/_fields/text-field/type";

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const AboutSimpleLeftFieldsConfigSchema = z.object({
  title: TextFieldConfigSchema,
  subtitle: TextFieldConfigSchema,
});
/* eslint-enable sort-keys-fix/sort-keys-fix */

export type AboutSimpleLeftFields = z.infer<
  typeof AboutSimpleLeftFieldsConfigSchema
>;

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const ABOUT_SIMPLE_LEFT_FIELDS_CONFIG: AboutSimpleLeftFields = {
  title: {
    label: "Header",
    type: "text",
    content: "Nazwa produktu",
  },
  subtitle: {
    label: "Subheader",
    type: "text",
    content: "Anim aute id magna aliqua ad ad non deserunt sunt. ",
  },
};
/* eslint-enable sort-keys-fix/sort-keys-fix */
