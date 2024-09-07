import { z } from "zod";

import { ButtonFieldConfigSchema } from "@/_fields/button-field/type";
import { ImageFieldConfigSchema } from "@/_fields/image-field/type";
import { TextFieldConfigSchema } from "@/_fields/text-field/type";

export const HeroOneFieldsConfigSchema = z.object({
  buttonOne: ButtonFieldConfigSchema,
  buttonTwo: ButtonFieldConfigSchema,
  description: TextFieldConfigSchema,
  heading: TextFieldConfigSchema,
  image: ImageFieldConfigSchema,
});

export type HeroOneFields = z.infer<typeof HeroOneFieldsConfigSchema>;

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const HERO_ONE_FIELDS_CONFIG: HeroOneFields = {
  heading: {
    type: "text",
    content: "This is initial heading",
  },
  description: {
    type: "text",
    content: "This is initial description",
  },
  buttonOne: {
    type: "button",
    content: "Initial value",
    action: {
      type: "link",
      href: "https://example.com",
      newTab: true,
    },
  },
  buttonTwo: {
    type: "button",
    content: "Call: 555 555 555",
    action: {
      type: "download",
      downloadUrl: "https://example.com",
    },
  },
  image: {
    type: "image",
    url: "https://patrocreations.com/static/e490cf178a4f2adf590e4690f765328c/31987/hero.png",
    alt: "This is an image",
  },
};
/* eslint-enable sort-keys-fix/sort-keys-fix */
