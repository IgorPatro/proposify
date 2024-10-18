import NextImage from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

import { getTheme } from "@/_hooks/use-theme";
import { Image } from "@/components/base/image";
import { isEmptyString } from "@/utils/string";

import { type BlockProps } from "../../types";

import { type HeroSimpleLeftFields } from "./config";

export const HeroSimpleLeft = ({ fields, resource, themeEnum }: BlockProps) => {
  const { background, subtitle, title } = fields as HeroSimpleLeftFields;
  const theme = getTheme(themeEnum);

  return (
    <div
      className={twMerge(
        "relative h-5/6 min-h-block w-full",
        `bg-${theme.background}`,
      )}
    >
      {isEmptyString(background.url) ? null : (
        <NextImage
          fill
          alt={background.alt}
          className="object-cover"
          src={background.url}
        />
      )}
      <div className="absolute left-0 top-0 flex size-full flex-col justify-between p-12">
        <Image
          alt="Logo"
          className="object-contain object-left-top"
          fallbackUrl="/logo-placeholder.png"
          height={100}
          src={resource?.logoUrl}
          width={100}
          wrapperClassName="h-8 w-52"
        />
        <div className="flex w-3/4 max-w-2xl flex-col gap-6">
          <h1
            className={twMerge(
              "text-3xl font-semibold lg:text-6xl",
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
      </div>
    </div>
  );
};
