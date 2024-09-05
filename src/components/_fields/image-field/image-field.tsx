import NextImage, { type ImageProps as NextImageProps } from "next/image";
import { type CSSProperties } from "react";

import { type ImageFieldConfig } from "./type";

interface ImageFieldProps extends Omit<NextImageProps, "src" | "alt"> {
  config: ImageFieldConfig;
  className?: string;
  style?: CSSProperties;
}

export const ImageField = ({ className, config, style }: ImageFieldProps) => {
  return (
    <NextImage
      className={className}
      style={style}
      alt={config.alt}
      src={config.url}
      fill
      objectFit="cover"
    />
  );
};
