import imageCompression from "browser-image-compression";

import { IMAGE_MAX_COMPRESS_SIZE_IN_MB } from "@/utils/upload-validation";

export const compressFile = async (file: File) => {
  // Note: Compress the image to up to 3mb.
  const compressedFile = await imageCompression(file, {
    maxSizeMB: IMAGE_MAX_COMPRESS_SIZE_IN_MB,
  });
  const convertedBlobFile = new File([compressedFile], file.name, {
    lastModified: Date.now(),
    type: file.type,
  });

  return convertedBlobFile;
};
