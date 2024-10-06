import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

import { getTheme } from "@/_hooks/use-theme";

import { type BlockProps } from "../../types";

import { type FooterSimpleLeftFields } from "./config";

export const FooterSimpleLeft = ({ fields, themeEnum }: BlockProps) => {
  const { background, title } = fields as FooterSimpleLeftFields;
  const theme = getTheme(themeEnum);

  return (
    <div
      className={twMerge(
        "h-9/12 min-h-block relative w-full",
        `bg-${theme.background}`,
      )}
    >
      <Image
        src={background?.url}
        alt={background?.alt}
        fill
        objectFit="cover"
      />
      <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-between p-12">
        <div className="relative h-8 w-52">
          <Image
            src="https://wellnesssolutions.pl/_astro/logo.Bmh5gH90.png"
            alt="Wellness Solutions logo"
            fill
            objectFit="contain"
          />
        </div>
        <div className="flex w-3/4 max-w-3xl translate-y-12 flex-col gap-10">
          <h1
            className={twMerge(
              "text-3xl font-semibold lg:text-5xl",
              `text-${theme.text.primary}`,
            )}
          >
            {title.content}
          </h1>
          <div className="flex flex-col gap-4 text-xl">
            <div className="flex flex-col gap-2">
              <span className={twMerge(`text-${theme.text.primary}`)}>
                Email
              </span>
              <span
                className={twMerge(
                  "font-semibold",
                  `text-${theme.text.primary}`,
                )}
              >
                mikolaj@wellnesssolutions.pl
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className={twMerge(`text-${theme.text.primary}`)}>
                Telefon
              </span>
              <span
                className={twMerge(
                  "font-semibold",
                  `text-${theme.text.primary}`,
                )}
              >
                +48 535 292 958
              </span>
            </div>
          </div>
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
