import React from "react";

import { Image } from "@/components/base/image";
import { Input } from "@/components/base/input";
import { ImagePickerDialog } from "@/components/image-picker-dialog";
import { Button } from "@/components/ui/button";
import { useToggle } from "@/hooks/use-toggle";

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
          <Image
            wrapperClassName="w-full aspect-video rounded-lg overflow-hidden"
            fill
            src={config.url}
            alt="Image"
          />
        ) : (
          <Button>Dodaj zdjęcie</Button>
        )}
        <Button onClick={toggleIsUploadDialogOpen}>Dodaj zdjęcie</Button>
        <ImagePickerDialog
          isOpen={isUploadDialogOpen}
          onClose={toggleIsUploadDialogOpen}
        />
        {/* <Input
          key={fieldName}
          name={fieldName}
          label="Url"
          placeholder="Image src"
          value={config.url}
          onChange={(event) =>
            updateBlockProperty(
              blockUuid,
              `${fieldName}.url`,
              event.target.value,
            )
          }
        /> */}
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
