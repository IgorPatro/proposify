export const getFallbackImageUrl = (fallbackUrl: string | undefined | null) => {
  return fallbackUrl ?? "/image-placeholder.svg";
};
