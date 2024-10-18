import { type CSSProperties } from "react";

import { useDownloadFromUrl } from "@/hooks/use-download-from-url";

import { type ButtonFieldConfig } from "./type";
import { isButtonActionDownload, isButtonActionLink } from "./utils";

interface ButtonFieldProps {
  className?: string;
  config: ButtonFieldConfig;
  style?: CSSProperties;
}

export const ButtonField = ({ className, config, style }: ButtonFieldProps) => {
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
    <button className={className} style={style} onClick={onClick}>
      {config.content}
    </button>
  );
};
