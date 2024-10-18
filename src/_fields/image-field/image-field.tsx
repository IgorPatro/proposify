import NextImage, { type ImageProps as NextImageProps } from "next/image";
import { type CSSProperties } from "react";

import { type ImageFieldConfig } from "./type";

interface ImageFieldProps extends Omit<NextImageProps, "src" | "alt"> {
  className?: string;
  config: ImageFieldConfig;
  style?: CSSProperties;
}

export const ImageField = ({ className, config, style }: ImageFieldProps) => {
  return (
    <NextImage
      fill
      alt={config.alt}
      className={className}
      objectFit="cover"
      src={config.url}
      style={style}
    />
  );
};
