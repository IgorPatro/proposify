import { FooterOne } from "./footer/footer-one";
import { FOOTER_ONE_FIELDS_CONFIG } from "./footer/footer-one/config";
import { HeroOne } from "./hero/hero-one";
import { HERO_ONE_FIELDS_CONFIG } from "./hero/hero-one/config";
import { HeroSimpleCentered } from "./hero/hero-simple-centered";
import { HERO_SIMPLE_CENTERED_FIELDS_CONFIG } from "./hero/hero-simple-centered/config";
import { type BlockComponent, type BlockFields, type BlockName } from "./types";

export const BLOCKS_MAP: {
  [T in BlockName]: BlockComponent;
} = {
  footer_one: FooterOne,
  hero_one: HeroOne,
  hero_simple_centered: HeroSimpleCentered,
};

export const BLOCKS_FIELDS_MAP: {
  [T in BlockName]: BlockFields;
} = {
  footer_one: FOOTER_ONE_FIELDS_CONFIG,
  hero_one: HERO_ONE_FIELDS_CONFIG,
  hero_simple_centered: HERO_SIMPLE_CENTERED_FIELDS_CONFIG,
};
