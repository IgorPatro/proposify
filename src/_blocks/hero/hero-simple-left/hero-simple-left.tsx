import React from "react";
import { twMerge } from "tailwind-merge";

import { BaseBlock } from "@/_blocks/base-block";
import { InfoField } from "@/_blocks/shared/info-field";
import { Logo } from "@/_blocks/shared/logo";
import { twUtils } from "@/_blocks/shared/utils";
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
            "@2xl:text-4xl text-3xl font-semibold",
            twUtils.color(theme.text.primary),
          )}
        >
          {title.content}
        </h1>
        <p
          className={twMerge(
            "@2xl:text-lg text-base",
            twUtils.color(theme.text.secondary),
          )}
        >
          {subtitle.content}
        </p>
      </div>
      <div className="@2xl:flex-row @2xl:gap-12 flex flex-col gap-4 text-sm">
        <InfoField label="Stworzono dla:" theme={theme}>
          Kamil Sidel
        </InfoField>
        <InfoField label="Przygotował:" theme={theme}>
          Igor Patro
        </InfoField>
        <InfoField label="Data wystawienia:" theme={theme}>
          26.10.2024
        </InfoField>
      </div>
    </BaseBlock>
  );
};
