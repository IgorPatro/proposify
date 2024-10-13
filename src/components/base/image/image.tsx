import NextImage, { type ImageProps } from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface ProductVariantImageProps extends Omit<ImageProps, "src"> {
  placeholderClassName?: string;
  src: string | undefined;
  wrapperClassName?: string;
}

export const Image = ({
  placeholderClassName,
  src,
  wrapperClassName,
  ...rest
}: ProductVariantImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!src) {
    return (
      <div className={twMerge("relative", wrapperClassName)}>
        <NextImage
          fill
          priority
          alt="Image placeholder"
          className="m-auto h-fit w-fit max-w-32 object-contain p-2"
          sizes="128px"
          src="/image-placeholder.svg"
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
            "relative z-0 flex h-full w-full animate-pulse items-center justify-center rounded bg-gray-200 text-gray-200",
            placeholderClassName,
          )}
        >
          <NextImage
            fill
            priority
            alt="Image placeholder"
            className="m-auto h-fit w-fit max-w-32 object-contain p-2"
            sizes="128px"
            src="/image-placeholder.svg"
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>
      ) : null}
      <NextImage {...rest} src={src} onLoad={() => setIsLoaded(true)} />
    </div>
  );
};
