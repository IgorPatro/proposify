import { DARK_THEME } from "@/_themes/dark";
import { LIGHT_THEME } from "@/_themes/light";
import { type ThemeEnum } from "@/server/api/template/types";

export const getTheme = (theme: ThemeEnum) => {
  switch (theme) {
    case "dark":
      return DARK_THEME;
    case "light":
      return LIGHT_THEME;
    default:
      return LIGHT_THEME;
  }
};