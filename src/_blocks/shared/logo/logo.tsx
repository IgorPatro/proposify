import React from "react";

import { Image } from "@/components/base/image";

interface LogoProps {
  alt?: string;
  src?: string | null;
}

export const Logo = ({ alt, src }: LogoProps) => {
  return (
    <Image
      alt={alt ?? ""}
      className="object-contain object-left-top"
      height={100}
      src={src}
      width={100}
      wrapperClassName="h-8 w-52"
    />
  );
};
