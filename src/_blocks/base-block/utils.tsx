import NextImage from "next/image";

import { getTheme } from "@/_hooks/use-theme";
import { type ThemeEnum } from "@/server/api/resource/types";

import { type Background } from "../types";

export const getBackgroundClassNames = (
  themeEnum: ThemeEnum,
  background: Background,
) => {
  if (background.type !== "initial") return "";
  const theme = getTheme(themeEnum);
  return `bg-${theme.background}`;
};

export const getBackgroundStyleProps = (background: Background) => {
  if (background.type !== "color") return {};
  return { style: { backgroundColor: background.color ?? "transparent" } };
};

export const getBackgroundImage = (
  background: Background | undefined | null,
) => {
  if (!background) {
    return null;
  }

  if (background.type === "image" && background.url) {
    return (
      <NextImage
        fill
        alt={background.alt ?? ""}
        className="object-cover"
        src={background.url}
      />
    );
  }

  return null;
};
