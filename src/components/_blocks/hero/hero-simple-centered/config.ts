import { z } from "zod";

import { ButtonFieldConfigSchema } from "@/components/_fields/button-field/type";
import { TextFieldConfigSchema } from "@/components/_fields/text-field/type";

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const HeroSimpleCenteredFieldsConfigSchema = z.object({
  banner: ButtonFieldConfigSchema,
  heading: TextFieldConfigSchema,
  subHeading: TextFieldConfigSchema,
  ctaButtonLeft: ButtonFieldConfigSchema,
  ctaButtonRight: ButtonFieldConfigSchema,
});
/* eslint-enable sort-keys-fix/sort-keys-fix */

export type HeroSimpleCenteredFields = z.infer<
  typeof HeroSimpleCenteredFieldsConfigSchema
>;

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const HERO_SIMPLE_CENTERED_FIELDS_CONFIG: HeroSimpleCenteredFields = {
  banner: {
    type: "button",
    content: "Announcing your next huge stuff. Read more",
    action: {
      type: "link",
      href: "https://example.com",
      newTab: false,
    },
  },
  heading: {
    type: "text",
    content: "Data to enrich your online business",
  },
  subHeading: {
    type: "text",
    content:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
  },
  ctaButtonLeft: {
    type: "button",
    content: "Call agent",
    action: {
      type: "link",
      href: "tel:+48785375312",
      newTab: false,
    },
  },
  ctaButtonRight: {
    type: "button",
    content: "Download",
    action: {
      type: "download",
      downloadUrl:
        "https://patrocreations.com/static/e490cf178a4f2adf590e4690f765328c/31987/hero.png",
    },
  },
};
/* eslint-enable sort-keys-fix/sort-keys-fix */
