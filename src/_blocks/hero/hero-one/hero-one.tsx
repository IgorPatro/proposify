import React from "react";
import { twMerge } from "tailwind-merge";

import { ButtonField } from "@/_fields/button-field";
import { ImageField } from "@/_fields/image-field";
import { getTheme } from "@/_hooks/use-theme";

import { type BlockProps } from "../../types";

import { type HeroOneFields } from "./config";

export const HeroOne = ({ fields, themeEnum }: BlockProps) => {
  const { buttonOne, buttonTwo, description, heading, image } =
    fields as HeroOneFields;
  const theme = getTheme(themeEnum);

  return (
    <div
      className="flex h-full min-h-180 w-full flex-col items-center justify-center gap-4"
      style={{
        backgroundColor: theme.background,
      }}
    >
      <div className="flex flex-col gap-2">
        <h1
          className={twMerge("text-5xl")}
          style={{
            color: theme.text,
          }}
        >
          {heading.content}
        </h1>
        <p
          className={twMerge("text-xl")}
          style={{
            color: theme.text,
          }}
        >
          {description.content}
        </p>
        <div className="flex gap-2">
          <ButtonField
            config={buttonOne}
            className={twMerge("border border-blue-500 bg-blue-500 px-4 py-2")}
            style={{
              color: theme.text,
            }}
          />
          <ButtonField
            config={buttonTwo}
            className={twMerge(
              "border border-green-500 bg-green-500 px-4 py-2",
            )}
            style={{
              color: theme.text,
            }}
          />
        </div>
      </div>
      <div className="relative h-60 w-60">
        <ImageField className="h-full w-full" config={image} />
      </div>
    </div>
  );
};
