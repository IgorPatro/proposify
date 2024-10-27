import React from "react";

import { getTheme } from "@/_hooks/use-theme";

import { type BlockProps } from "../../types";

import { type HeroSimpleCenteredFields } from "./config";
import { BaseBlock } from "@/_blocks/base-block";
import { Heading } from "@/_blocks/shared/heading";
import { twUtils } from "@/_blocks/shared/utils";
import { Button } from "@/_blocks/shared/button";
import { Logo } from "@/_blocks/shared/logo";

export const HeroSimpleCentered = (props: BlockProps) => {
  const { fields, themeEnum, resource } = props;
  const { ctaButtonLeft, ctaButtonRight, heading, subHeading } =
    fields as HeroSimpleCenteredFields;
  const theme = getTheme(themeEnum);

  return (
    <BaseBlock {...props}>
      <div className="flex h-full w-full flex-col items-center justify-center gap-6 text-center">
        <Logo
          wrapperClassName="flex justify-center h-12 w-64"
          alt="Logo"
          src={resource.logoUrl}
          className="object-center"
        />
        <div className="flex max-w-4/5 flex-col gap-4">
          <Heading size="large" className={twUtils.color(theme.text.primary)}>
            {heading.content}
          </Heading>
          <Heading size="small" className={twUtils.color(theme.text.secondary)}>
            {subHeading.content}
          </Heading>
        </div>
        <div className="flex gap-2">
          <Button theme={theme} config={ctaButtonLeft} />
          <Button variant="secondary" theme={theme} config={ctaButtonRight} />
        </div>
      </div>
    </BaseBlock>
  );
};
