import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

import { getTheme } from "@/_hooks/use-theme";

import { type BlockProps } from "../../types";

import { type AboutSimpleLeftFields } from "./config";

export const AboutSimpleLeft = ({ fields, themeEnum }: BlockProps) => {
  const { background, subtitle, title } = fields as AboutSimpleLeftFields;
  const theme = getTheme(themeEnum);

  return (
    <div
      className={twMerge(
        "h-9/12 relative min-h-block w-full",
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
        <div className="flex w-full justify-between">
          <span className={twMerge(`text-${theme.text.secondary}`)}>
            Oferta
          </span>
          <span className={twMerge(`text-${theme.text.secondary}`)}>
            24 września 2024
          </span>
        </div>

        <div className="flex max-w-2xl flex-col gap-4">
          <h1
            className={twMerge(
              "text-5xl font-semibold",
              `text-${theme.text.primary}`,
            )}
          >
            O nas
          </h1>
          <p className={twMerge(`text-${theme.text.secondary}`)}>
            Naszą misją jest dostarczanie najwyższej jakości saun oraz jacuzzi
            ogrodowych, które wzbogacają przestrzeń zewnętrzną i zapewniają
            wyjątkowe korzyści zdrowotne oraz relaksacyjne. Dzięki naszemu
            wieloletniemu doświadczeniu w branży, tworzymy produkty, które łączą
            w sobie tradycyjne rzemiosło z nowoczesnym designem, dopasowanym do
            indywidualnych potrzeb naszych klientów. Każda sauna i jacuzzi
            powstają z największą starannością i dbałością o każdy detal, co
            gwarantuje ich niezawodność oraz długowieczność.
          </p>
          <div className="relative h-20 w-44">
            <Image
              src="https://wellnesssolutions.pl/_astro/logo.Bmh5gH90.png"
              alt="Wellness Solutions logo"
              fill
              objectFit="contain"
            />
          </div>
        </div>

        <div className="flex w-full items-end justify-between">
          <div className="relative h-8 w-24">
            <Image
              src="https://wellnesssolutions.pl/_astro/logo.Bmh5gH90.png"
              alt="Wellness Solutions logo"
              fill
              objectFit="contain"
            />
          </div>
          <span className={twMerge(`text-${theme.text.secondary}`)}>6/7</span>
        </div>
      </div>
    </div>
  );
};
