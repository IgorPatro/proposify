import React from "react";

import { Image } from "@/components/base/image";
import { Input } from "@/components/base/input";
import { ImagePickerSheet } from "@/components/image-picker-sheet";
import { Button } from "@/components/ui/button";
import { useToggle } from "@/hooks/use-toggle";
import { HiRefresh } from "react-icons/hi";

import { type ImageFieldConfig } from "./type";

interface ImageFieldFormProps {
  blockUuid: string;
  fieldName: string;
  config: ImageFieldConfig;
  updateBlockProperty: (blockUuid: string, path: string, value: string) => void;
}

export const ImageFieldForm = ({
  blockUuid,
  config,
  fieldName,
  updateBlockProperty,
}: ImageFieldFormProps) => {
  const [isUploadDialogOpen, toggleIsUploadDialogOpen] = useToggle();

  return (
    <fieldset className="grid gap-6 rounded-lg border p-4">
      <legend className="-ml-1 px-1 text-sm font-medium">{config.label}</legend>
      <div className="flex flex-col gap-4">
        {config.url ? (
          <div className="relative" onClick={toggleIsUploadDialogOpen}>
            <Image
              wrapperClassName="w-full aspect-video rounded-lg overflow-hidden"
              fill
              src={config.url}
              alt="Image"
            />
            <div className="absolute left-0 top-0 flex h-full w-full cursor-pointer items-center justify-center opacity-0 hover:opacity-100">
              <HiRefresh className="h-12 w-12 text-red-800" />
            </div>
          </div>
        ) : (
          <Button>Wybierz zdjęcie</Button>
        )}
        <ImagePickerSheet
          isOpen={isUploadDialogOpen}
          onClose={toggleIsUploadDialogOpen}
          onSelectImageUrl={(url) =>
            updateBlockProperty(blockUuid, `${fieldName}.url`, url)
          }
        />
        <Input
          key={fieldName}
          name={fieldName}
          placeholder="Alt"
          label="Tekst alternatywny"
          value={config.alt}
          onChange={(event) =>
            updateBlockProperty(
              blockUuid,
              `${fieldName}.url`,
              event.target.value,
            )
          }
        />
      </div>
    </fieldset>
  );
};
