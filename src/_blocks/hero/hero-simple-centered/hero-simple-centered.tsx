import React from "react";
import { twMerge } from "tailwind-merge";

import { ButtonField } from "@/_fields/button-field";

import { type BlockProps } from "../../types";

import { type HeroSimpleCenteredFields } from "./config";

export const HeroSimpleCentered = ({ fields, theme }: BlockProps) => {
  const { banner, ctaButtonLeft, ctaButtonRight, heading, subHeading } =
    fields as HeroSimpleCenteredFields;

  return (
    <div
      className="min-h-180 flex h-full w-full flex-col items-center justify-center gap-4"
      style={{
        backgroundColor: theme.bgPrimary,
      }}
    >
      <div className="max-w-168 flex w-9/12 flex-col items-center justify-center gap-6 text-center">
        <ButtonField
          config={banner}
          className={twMerge(
            "rounded-3xl border border-opacity-40 px-4 py-2 text-sm",
          )}
          style={{
            borderColor: theme.textSecondary,
            color: theme.textSecondary,
          }}
        />
        <h1
          className={twMerge("text-5xl font-bold")}
          style={{
            color: theme.textPrimary,
          }}
        >
          {heading.content}
        </h1>
        <p
          className={twMerge("text-lg")}
          style={{
            color: theme.textSecondary,
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
              color: theme.textSecondary,
            }}
          />
        </div>
      </div>
    </div>
  );
};
