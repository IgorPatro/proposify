import { z } from "zod";

import { ImageFieldConfigSchema } from "@/_fields/image-field/type";
import { TextFieldConfigSchema } from "@/_fields/text-field/type";

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const AboutSimpleLeftFieldsConfigSchema = z.object({
  title: TextFieldConfigSchema,
  subtitle: TextFieldConfigSchema,
  background: ImageFieldConfigSchema,
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
  background: {
    label: "Background",
    type: "image",
    alt: "Wellness Solutions background",
    url: "https://wellnesssolutions.pl/_astro/hero.JcFnYaP0.png",
  },
};
/* eslint-enable sort-keys-fix/sort-keys-fix */
