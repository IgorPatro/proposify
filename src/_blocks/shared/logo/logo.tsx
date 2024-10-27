import React from "react";

import { Image } from "@/components/base/image";
import { twMerge } from "tailwind-merge";

interface LogoProps {
  alt?: string;
  src: string | undefined | null;
  className?: string;
  wrapperClassName?: string;
}

export const Logo = ({ alt, src, className, wrapperClassName }: LogoProps) => {
  return (
    <Image
      fill
      alt={alt ?? "Logo"}
      className={twMerge("object-contain object-left-top", className)}
      src={src}
      wrapperClassName={twMerge("h-8 w-52", wrapperClassName)}
    />
  );
};
