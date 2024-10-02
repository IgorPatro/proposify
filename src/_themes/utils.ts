import { DARK_THEME } from "./dark";
import { LIGHT_THEME } from "./light";

// Note: Generate a list of classes that won't be purged by TailwindCSS
// Those are dynamic classes that come from the theme
export const generateTailwindSafelist = () => {
  return Object.values(DARK_THEME)
    .map((value) => `bg-${value}`)
    .concat(Object.values(LIGHT_THEME).map((value) => `bg-${value}`))
    .concat(Object.values(DARK_THEME).map((value) => `text-${value}`))
    .concat(Object.values(LIGHT_THEME).map((value) => `text-${value}`))
    .concat(Object.values(DARK_THEME).map((value) => `border-${value}`))
    .concat(Object.values(LIGHT_THEME).map((value) => `border-${value}`));
};
