import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

import { getTheme } from "@/_hooks/use-theme";

import { type BlockProps } from "../../types";

import { type AboutSimpleLeftFields } from "./config";
import { BaseBlock } from "@/_blocks/base-block";
import { PageDetailsWrapper } from "@/_blocks/shared/page-details-wrapper";

import { twUtils } from "@/_blocks/shared/utils";
import { Heading } from "@/_blocks/shared/heading";
import { Text } from "@/_blocks/shared/text";
import { Logo } from "@/_blocks/shared/logo";

export const AboutSimpleLeft = (props: BlockProps) => {
  const { fields, themeEnum, resource } = props;
  const { subtitle, title } = fields as AboutSimpleLeftFields;
  const theme = getTheme(themeEnum);

  return (
    <BaseBlock {...props}>
      <PageDetailsWrapper resource={resource}>
        <div className="flex max-w-2xl flex-col gap-4">
          <Heading size="large" className={twUtils.color(theme.text.primary)}>
            {title.content}
          </Heading>
          <Text>{subtitle.content}</Text>
          <div className="relative h-20 w-44">
            <Logo src={resource.logoUrl} />
          </div>
        </div>
      </PageDetailsWrapper>
    </BaseBlock>
  );
};
