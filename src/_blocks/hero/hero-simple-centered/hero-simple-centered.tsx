import React from "react";
import { twMerge } from "tailwind-merge";

import { ButtonField } from "@/_fields/button-field";
import { getTheme } from "@/_hooks/use-theme";

import { type BlockProps } from "../../types";

import { type HeroSimpleCenteredFields } from "./config";

export const HeroSimpleCentered = ({ fields, themeEnum }: BlockProps) => {
  const { banner, ctaButtonLeft, ctaButtonRight, heading, subHeading } =
    fields as HeroSimpleCenteredFields;
  const theme = getTheme(themeEnum);

  return (
    <div
      className="flex h-full min-h-180 w-full flex-col items-center justify-center gap-4"
      style={{
        backgroundColor: theme.background,
      }}
    >
      <div className="max-w-168 flex w-9/12 flex-col items-center justify-center gap-6 text-center">
        <ButtonField
          config={banner}
          className={twMerge(
            "rounded-3xl border border-opacity-40 px-4 py-2 text-sm",
          )}
          style={{
            borderColor: theme.text,
            color: theme.text,
          }}
        />
        <h1
          className={twMerge("text-5xl font-bold")}
          style={{
            color: theme.text,
          }}
        >
          {heading.content}
        </h1>
        <p
          className={twMerge("text-lg")}
          style={{
            color: theme.text,
          }}
        >
          {subHeading.content}
        </p>
        <div className="flex gap-2">
          <ButtonField
            config={ctaButtonLeft}
            className={twMerge(
              "rounded-md border bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700",
            )}
          />
          <ButtonField
            config={ctaButtonRight}
            className={twMerge(
              "rounded-md border border-gray-500 px-5 py-3 transition-colors hover:bg-gray-500 hover:!text-white",
            )}
            style={{
              color: theme.text,
            }}
          />
        </div>
      </div>
    </div>
  );
};
