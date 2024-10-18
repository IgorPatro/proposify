import React from "react";
import { twMerge } from "tailwind-merge";

import { ButtonField } from "@/_fields/button-field";
import { getTheme } from "@/_hooks/use-theme";
import {
  getPrimaryButtonClassNames,
  getSecondaryButtonClassNames,
} from "@/_themes/utils";

import { type BlockProps } from "../../types";

import { type HeroSimpleCenteredFields } from "./config";

export const HeroSimpleCentered = ({ fields, themeEnum }: BlockProps) => {
  const { banner, ctaButtonLeft, ctaButtonRight, heading, subHeading } =
    fields as HeroSimpleCenteredFields;
  const theme = getTheme(themeEnum);

  return (
    <div
      className={twMerge(
        "h-9/12 flex min-h-block w-full flex-col items-center justify-center gap-4",
        `bg-${theme.background}`,
      )}
    >
      <div className="max-w-168 flex w-9/12 flex-col items-center justify-center gap-6 text-center">
        <ButtonField
          className={twMerge(
            "rounded-3xl border border-opacity-40 px-4 py-2 text-xs md:text-sm",
            `border-${theme.button.primary.border}`,
            `text-${theme.button.primary.color}`,
          )}
          config={banner}
        />
        <h1
          className={twMerge(
            "text-3xl font-bold lg:text-5xl",
            `text-${theme.text.primary}`,
          )}
        >
          {heading.content}
        </h1>
        <p
          className={twMerge(
            "text-base md:text-lg",
            `text-${theme.text.secondary}`,
          )}
        >
          {subHeading.content}
        </p>
        <div className="flex gap-2">
          <ButtonField
            className={twMerge(
              "rounded-md border px-5 py-3 text-sm font-semibold transition-colors",
              getPrimaryButtonClassNames(theme),
            )}
            config={ctaButtonLeft}
          />
          <ButtonField
            className={twMerge(
              "rounded-md border px-5 py-3 transition-colors",
              getSecondaryButtonClassNames(theme),
            )}
            config={ctaButtonRight}
          />
        </div>
      </div>
    </div>
  );
};
