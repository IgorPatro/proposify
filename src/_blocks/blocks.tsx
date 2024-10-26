import { HeroSimpleCenteredIcon, HeroSimpleLeftIcon } from "@/_icons";
import { type BlockIconProps } from "@/_icons/types";

import { AboutSimpleLeft } from "./about/about-simple-left";
import { ABOUT_SIMPLE_LEFT_FIELDS_CONFIG } from "./about/about-simple-left/config";
import { FOOTER_SIMPLE_LEFT_FIELDS_CONFIG } from "./footer/footer-simple-left/config";
import { FooterSimpleLeft } from "./footer/footer-simple-left/footer-simple-left";
import { HeroSimpleCentered } from "./hero/hero-simple-centered";
import { HERO_SIMPLE_CENTERED_FIELDS_CONFIG } from "./hero/hero-simple-centered/config";
import { HeroSimpleLeft } from "./hero/hero-simple-left";
import { HERO_SIMPLE_LEFT_FIELDS_CONFIG } from "./hero/hero-simple-left/config";
import { type BlockComponent, type BlockFields, type BlockName } from "./types";

export const BLOCKS_MAP: {
  [T in BlockName]: BlockComponent;
} = {
  about_simple_left: AboutSimpleLeft,
  footer_simple_left: FooterSimpleLeft,
  hero_simple_centered: HeroSimpleCentered,
  hero_simple_left: HeroSimpleLeft,
};

export const BLOCKS_FIELDS_MAP: {
  [T in BlockName]: BlockFields;
} = {
  about_simple_left: ABOUT_SIMPLE_LEFT_FIELDS_CONFIG,
  footer_simple_left: FOOTER_SIMPLE_LEFT_FIELDS_CONFIG,
  hero_simple_centered: HERO_SIMPLE_CENTERED_FIELDS_CONFIG,
  hero_simple_left: HERO_SIMPLE_LEFT_FIELDS_CONFIG,
};

// Note: https://www.figma.com/design/xSDk1v5cE8sGbAllorqPj4/Oferty-Wellness-Solutions?node-id=131-107&t=dx8ZFlEnqUWMMhwi-1
// Here you can generate icons for each block
export const BLOCKS_ICONS_MAP: {
  [T in BlockName]: (props: BlockIconProps) => JSX.Element;
} = {
  about_simple_left: HeroSimpleLeftIcon,
  footer_simple_left: HeroSimpleLeftIcon,
  hero_simple_centered: HeroSimpleCenteredIcon,
  hero_simple_left: HeroSimpleLeftIcon,
};
