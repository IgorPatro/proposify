import React from "react";
import { twMerge } from "tailwind-merge";

import { Image } from "@/components/base/image";

import { type BlockProps } from "../types";

import {
  getBackgroundClassNames,
  getBackgroundImage,
  getBackgroundStyleProps,
} from "./utils";

interface BaseBlockProps extends BlockProps {
  children: React.ReactNode;
}

export const BaseBlock = ({
  background,
  children,
  themeEnum,
}: BaseBlockProps) => {
  return (
    <div
      className={twMerge(
        "resource-block",
        getBackgroundClassNames(themeEnum, background),
      )}
      {...getBackgroundStyleProps(background)}
    >
      {getBackgroundImage(background)}
      <div className="absolute left-0 top-0 flex size-full flex-col justify-between p-6">
        {children}
      </div>
    </div>
  );
};
