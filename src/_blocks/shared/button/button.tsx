import { type CSSProperties } from "react";

import { useDownloadFromUrl } from "@/hooks/use-download-from-url";

import { ButtonFieldConfig } from "@/_fields/button-field/type";
import {
  isButtonActionDownload,
  isButtonActionLink,
} from "@/_fields/button-field/utils";
import { ThemeSchema } from "@/_themes/type";
import { twMerge } from "tailwind-merge";
import { getButtonClassNames } from "./utilts";

interface ButtonProps {
  className?: string;
  config: ButtonFieldConfig;
  theme: ThemeSchema;
  variant?: "primary" | "secondary";
}

export const Button = ({
  className,
  config,
  theme,
  variant = "primary",
}: ButtonProps) => {
  const { downloadFromUrl } = useDownloadFromUrl();

  const onClick = async () => {
    if (isButtonActionLink(config.action)) {
      window.open(
        config.action.href,
        config.action.newTab ? "_blank" : "_self",
      );
    }

    if (isButtonActionDownload(config.action)) {
      await downloadFromUrl(config.action.downloadUrl);
    }
  };

  return (
    <button
      className={twMerge(
        "@2xl:text-sm rounded-md border px-5 py-3 text-xs transition-colors",
        getButtonClassNames(variant, theme),
        className,
      )}
      onClick={onClick}
    >
      {config.content}
    </button>
  );
};
