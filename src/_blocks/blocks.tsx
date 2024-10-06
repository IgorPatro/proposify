import { AboutSimpleLeft } from "./about/about-simple-left";
import { ABOUT_SIMPLE_LEFT_FIELDS_CONFIG } from "./about/about-simple-left/config";
import { FooterOne } from "./footer/footer-one";
import { FOOTER_ONE_FIELDS_CONFIG } from "./footer/footer-one/config";
import { FOOTER_SIMPLE_LEFT_FIELDS_CONFIG } from "./footer/footer-simple-left/config";
import { FooterSimpleLeft } from "./footer/footer-simple-left/footer-simple-left";
import { HeroOne } from "./hero/hero-one";
import { HERO_ONE_FIELDS_CONFIG } from "./hero/hero-one/config";
import { HeroSimpleCentered } from "./hero/hero-simple-centered";
import { HERO_SIMPLE_CENTERED_FIELDS_CONFIG } from "./hero/hero-simple-centered/config";
import { HeroSimpleLeft } from "./hero/hero-simple-left";
import { HERO_SIMPLE_LEFT_FIELDS_CONFIG } from "./hero/hero-simple-left/config";
import { type BlockComponent, type BlockFields, type BlockName } from "./types";

export const BLOCKS_MAP: {
  [T in BlockName]: BlockComponent;
} = {
  about_simple_left: AboutSimpleLeft,
  footer_one: FooterOne,
  footer_simple_left: FooterSimpleLeft,
  hero_one: HeroOne,
  hero_simple_centered: HeroSimpleCentered,
  hero_simple_left: HeroSimpleLeft,
};

export const BLOCKS_FIELDS_MAP: {
  [T in BlockName]: BlockFields;
} = {
  about_simple_left: ABOUT_SIMPLE_LEFT_FIELDS_CONFIG,
  footer_one: FOOTER_ONE_FIELDS_CONFIG,
  footer_simple_left: FOOTER_SIMPLE_LEFT_FIELDS_CONFIG,
  hero_one: HERO_ONE_FIELDS_CONFIG,
  hero_simple_centered: HERO_SIMPLE_CENTERED_FIELDS_CONFIG,
  hero_simple_left: HERO_SIMPLE_LEFT_FIELDS_CONFIG,
};
