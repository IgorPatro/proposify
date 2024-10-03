import { DARK_THEME } from "./dark";
import { LIGHT_THEME } from "./light";
import { type ThemeSchema } from "./type";

// Note: Extract all colors from a theme to a string[]
const extractThemeColors = (theme: ThemeSchema): string[] => {
  const result: string[] = [];

  function recursiveExtract(item: object | string) {
    if (typeof item === "string") {
      result.push(item);
    } else if (typeof item === "object" && item !== null) {
      for (const key in item) {
        if (item.hasOwnProperty(key)) {
          recursiveExtract(item[key as keyof typeof item]);
        }
      }
    }
  }

  recursiveExtract(theme);
  return result;
};

export const LIGHT_COLORS = extractThemeColors(LIGHT_THEME);
const DARK_COLORS = extractThemeColors(DARK_THEME);

// Note: Generate a list of classes that won't be purged by TailwindCSS
// Those are dynamic classes that come from the theme
export const generateTailwindSafelist = () => {
  return Object.values(LIGHT_COLORS)
    .map((value) => `bg-${value}`)
    .concat(Object.values(DARK_COLORS).map((value) => `bg-${value}`))
    .concat(Object.values(LIGHT_COLORS).map((value) => `hover:bg-${value}`))
    .concat(Object.values(DARK_COLORS).map((value) => `hover:bg-${value}`))
    .concat(Object.values(LIGHT_COLORS).map((value) => `text-${value}`))
    .concat(Object.values(DARK_COLORS).map((value) => `text-${value}`))
    .concat(Object.values(LIGHT_COLORS).map((value) => `border-${value}`))
    .concat(Object.values(DARK_COLORS).map((value) => `border-${value}`));
};

export const getPrimaryButtonClassNames = (theme: ThemeSchema) => {
  const { primary } = theme.button;

  return `bg-${primary.background} border-${primary.border} text-${primary.color} hover:bg-${primary.hover} text-xs md:text-sm`;
};

export const getSecondaryButtonClassNames = (theme: ThemeSchema) => {
  const { secondary } = theme.button;

  return `bg-${secondary.background} border-${secondary.border} text-${secondary.color} hover:bg-${secondary.hover} text-xs md:text-sm`;
};
