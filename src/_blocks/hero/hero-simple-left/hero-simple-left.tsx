import React from "react";
import { twMerge } from "tailwind-merge";

import { BaseBlock } from "@/_blocks/base-block";
import { Logo } from "@/_blocks/shared/logo";
import { getTheme } from "@/_hooks/use-theme";

import { type BlockProps } from "../../types";

import { type HeroSimpleLeftFields } from "./config";

export const HeroSimpleLeft = (props: BlockProps) => {
  const { fields, resource, themeEnum } = props;
  const { subtitle, title } = fields as HeroSimpleLeftFields;
  const theme = getTheme(themeEnum);

  return (
    <BaseBlock {...props}>
      <Logo alt="Logo" src={resource.logoUrl} />
      <div className="flex w-3/4 max-w-2xl flex-col gap-6">
        <h1
          className={twMerge(
            "@lg:text-6xl text-3xl font-semibold",
            `text-${theme.text.primary}`,
          )}
        >
          {title.content}
        </h1>
        <p
          className={twMerge(
            "text-base md:text-2xl",
            `text-${theme.text.secondary}`,
          )}
        >
          {subtitle.content}
        </p>
      </div>
      <div className="flex gap-12">
        <div className="flex flex-col gap-2">
          <span className={twMerge(`text-${theme.text.primary}`)}>
            Stworzono dla:
          </span>
          <span
            className={twMerge("font-semibold", `text-${theme.text.primary}`)}
          >
            Kamil Sidel
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className={twMerge(`text-${theme.text.primary}`)}>
            Przygotował:
          </span>
          <span
            className={twMerge("font-semibold", `text-${theme.text.primary}`)}
          >
            Mikołaj Ligęzka
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className={twMerge(`text-${theme.text.primary}`)}>
            Data wystawienia:
          </span>
          <span
            className={twMerge("font-semibold", `text-${theme.text.primary}`)}
          >
            24 września 2024
          </span>
        </div>
      </div>
    </BaseBlock>
  );
};
