import { z } from "zod";

import { ImageFieldConfigSchema } from "@/_fields/image-field/type";
import { TextFieldConfigSchema } from "@/_fields/text-field/type";

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const FooterSimpleLeftFieldsConfigSchema = z.object({
  title: TextFieldConfigSchema,
  background: ImageFieldConfigSchema,
});
/* eslint-enable sort-keys-fix/sort-keys-fix */

export type FooterSimpleLeftFields = z.infer<
  typeof FooterSimpleLeftFieldsConfigSchema
>;

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const FOOTER_SIMPLE_LEFT_FIELDS_CONFIG: FooterSimpleLeftFields = {
  title: {
    label: "Header",
    type: "text",
    content: "Nazwa produktu",
  },
  background: {
    label: "Background",
    type: "image",
    alt: "Wellness Solutions background",
    url: "https://wellnesssolutions.pl/_astro/hero.JcFnYaP0.png",
  },
};
/* eslint-enable sort-keys-fix/sort-keys-fix */
