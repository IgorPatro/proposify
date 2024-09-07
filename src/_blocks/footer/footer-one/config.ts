import { z } from "zod";

import { TextFieldConfigSchema } from "@/_fields/text-field/type";

export const FooterOneFieldsConfigSchema = z.object({
  description: TextFieldConfigSchema,
  heading: TextFieldConfigSchema,
});

export type FooterOneFields = z.infer<typeof FooterOneFieldsConfigSchema>;

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const FOOTER_ONE_FIELDS_CONFIG: FooterOneFields = {
  heading: {
    type: "text",
    content: "Thanks for visiting",
  },
  description: {
    type: "text",
    content: "It was an amazing experience",
  },
};
/* eslint-enable sort-keys-fix/sort-keys-fix */
