import Image from "next/image";
import { type RefObject, useEffect, useState, type ReactNode } from "react";
import { HiOutlineTrash, HiUpload } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import { useFilePicker } from "use-file-picker";

import {
  IMAGE_MAX_SIZE_IN_MB,
  IMAGE_UPLOAD_FORMATS,
} from "@/utils/upload-validation";

import { compressFile } from "./utils";

type ImageUploaderProps = {
  accepts?: string;
  compress?: boolean;
  containerRef?: RefObject<HTMLDivElement>;
  disabled?: boolean;
  error?: string;
  innerLabel?: ReactNode;
  inputRef?: RefObject<HTMLButtonElement>;
  isLoading?: boolean;
  label?: string;
  maxSize?: number;
  url?: string;
  onDelete?: () => void;
  onUpload: (formData: FormData) => void;
};

export const ImageUploader = ({
  accepts = IMAGE_UPLOAD_FORMATS,
  compress = true,
  containerRef,
  disabled = false,
  error,
  innerLabel,
  inputRef,
  isLoading = false,
  label,
  maxSize = IMAGE_MAX_SIZE_IN_MB,
  onDelete,
  onUpload,
  url,
}: ImageUploaderProps) => {
  const [fileError, setFileError] = useState(error);
  const [isCompressing, setIsCompressing] = useState(false);

  const onCompressFile = async (file: File) => {
    setIsCompressing(true);
    const compressedFile = await compressFile(file);
    setIsCompressing(false);
    return compressedFile;
  };

  const onUploadImage = async (file: File) => {
    const fileToUpload = compress ? await onCompressFile(file) : file;
    const formData = new FormData();
    formData.append("file", fileToUpload);
    onUpload(formData);
  };

  const { clear, errors, filesContent, loading, openFilePicker, plainFiles } =
    useFilePicker({
      accept: accepts,
      maxFileSize: maxSize,
      multiple: false,
      onFilesSuccessfullySelected: async ({ plainFiles }) => {
        if (!plainFiles || plainFiles.length === 0) return;
        if (!plainFiles[0]) return;
        await onUploadImage(plainFiles[0]);
      },
      readAs: "DataURL",
      // validators: [getFilesTypeValidator(accepts)],
    });

  useEffect(() => {
    if (errors.length > 0 && errors[0]?.name === "FileSizeError") {
      setFileError("File is too big");
      clear();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  useEffect(() => {
    setFileError(error);
  }, [error]);

  const renderContent = () => {
    if (isLoading || loading || isCompressing) {
      return (
        <div className="flex w-full flex-1 flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 pb-6 pt-5 hover:bg-gray-100">
          spinner
        </div>
      );
    }

    if (url) {
      return (
        <div className="relative m-auto flex h-full w-full flex-1 flex-col items-center justify-center overflow-hidden rounded-md">
          <Image
            fill
            alt={`Image ${label}`}
            src={url}
            style={{ objectFit: "contain" }}
            unoptimized={true}
          />
          {onDelete ? (
            <div
              className="absolute bottom-2 right-2 cursor-pointer rounded-full bg-white/80 p-2"
              onClick={onDelete}
            >
              <HiOutlineTrash className="h-5 w-5 text-red-500" />
            </div>
          ) : null}
        </div>
      );
    }

    return (
      <>
        <button
          className={twMerge(
            "flex w-full flex-1 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed",
            fileError
              ? "border-red-300 bg-red-50 hover:bg-red-100"
              : "border-gray-300 bg-gray-50 hover:bg-gray-100",
            disabled ? "pointer-events-none opacity-50" : "",
          )}
          disabled={disabled}
          ref={inputRef}
          type="button"
          onClick={openFilePicker}
        >
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <div className="mb-3 h-10 w-10 text-gray-400">
              <HiUpload />
            </div>
            <p className="mb-2 text-sm font-semibold text-gray-500">
              {innerLabel ?? "Click to upload"}
            </p>
            <p className="text-xs text-gray-500">
              {`Max. File Size: ${maxSize} MB`}
            </p>
          </div>
        </button>
        {fileError ? (
          <div className="mx-1 mt-1 text-xs text-red-500">{fileError}</div>
        ) : null}
      </>
    );
  };

  return (
    <>
      <div
        className="relative flex h-full w-full flex-col items-start space-y-2"
        ref={containerRef}
      >
        {label ? (
          <div className="block w-full text-sm font-medium text-gray-900">
            {label}
          </div>
        ) : null}
        {renderContent()}
      </div>
    </>
  );
};
