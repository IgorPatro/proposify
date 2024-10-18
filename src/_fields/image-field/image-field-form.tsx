import React from "react";
import { HiRefresh, HiTrash } from "react-icons/hi";

import { Image } from "@/components/base/image";
import { Input } from "@/components/base/input";
import { ImagePickerSheet } from "@/components/image-picker-sheet";
import { Button } from "@/components/ui/button";
import { useToggle } from "@/hooks/use-toggle";

import { type ImageFieldConfig } from "./type";

interface ImageFieldFormProps {
  blockUuid: string;
  config: ImageFieldConfig;
  fieldName: string;
  updateBlockProperty: (blockUuid: string, path: string, value: string) => void;
}

export const ImageFieldForm = ({
  blockUuid,
  config,
  fieldName,
  updateBlockProperty,
}: ImageFieldFormProps) => {
  const [isPickImageSheetOpen, toggleIsPickImageSheetOpen] = useToggle();

  const onRemoveImage = () => {
    updateBlockProperty(blockUuid, `${fieldName}.url`, "");
  };

  return (
    <fieldset className="grid gap-6 rounded-lg border p-4">
      <legend className="-ml-1 px-1 text-sm font-medium">{config.label}</legend>
      <div className="flex flex-col gap-4">
        {config.url ? (
          <div className="relative">
            <Image
              fill
              alt="Image"
              src={config.url}
              wrapperClassName="w-full aspect-video rounded-lg overflow-hidden"
            />
            <div className="absolute left-0 top-0 flex size-full items-center justify-center bg-black/50 opacity-0 hover:opacity-100">
              <div className="flex gap-2">
                <HiRefresh
                  className="size-6 cursor-pointer text-white"
                  onClick={toggleIsPickImageSheetOpen}
                />
                <HiTrash
                  className="size-6 cursor-pointer text-red-500"
                  onClick={onRemoveImage}
                />
              </div>
            </div>
          </div>
        ) : (
          <Button onClick={toggleIsPickImageSheetOpen}>Wybierz zdjęcie</Button>
        )}
        <ImagePickerSheet
          isOpen={isPickImageSheetOpen}
          onClose={toggleIsPickImageSheetOpen}
          onSelectImageUrl={(url) =>
            updateBlockProperty(blockUuid, `${fieldName}.url`, url)
          }
        />
        <Input
          key={fieldName}
          label="Tekst alternatywny"
          name={fieldName}
          placeholder="Alt"
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
