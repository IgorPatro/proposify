import NextImage, { type ImageProps as NextImageProps } from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { getFallbackImageUrl } from "./utils";

interface ImageProps extends Omit<NextImageProps, "src"> {
  fallbackUrl?: string;
  placeholderClassName?: string;
  src: string | undefined | null;
  wrapperClassName?: string;
}

export const Image = ({
  fallbackUrl,
  placeholderClassName,
  src,
  wrapperClassName,
  ...rest
}: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!src) {
    return (
      <div className={twMerge("relative", wrapperClassName)}>
        <NextImage
          fill
          priority
          alt="Image placeholder"
          className="m-auto size-fit max-w-32 object-contain p-2"
          sizes="128px"
          src={getFallbackImageUrl(fallbackUrl)}
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
      </div>
    );
  }

  return (
    <div className={twMerge("relative", wrapperClassName)}>
      {!isLoaded ? (
        <div
          className={twMerge(
            "relative z-0 flex size-full animate-pulse items-center justify-center rounded bg-gray-200 text-gray-200",
            placeholderClassName,
          )}
        >
          <NextImage
            fill
            priority
            alt="Image placeholder"
            className="m-auto size-fit max-w-32 object-contain p-2"
            sizes="128px"
            src={getFallbackImageUrl(fallbackUrl)}
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>
      ) : null}
      <NextImage {...rest} src={src} onLoad={() => setIsLoaded(true)} />
    </div>
  );
};
