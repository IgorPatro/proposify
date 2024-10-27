import React from "react";
import { HiRefresh, HiTrash } from "react-icons/hi";

import { type Background } from "@/_blocks/types";
import { Image } from "@/components/base/image";
import { Input } from "@/components/base/input";
import { ImagePickerSheet } from "@/components/image-picker-sheet";
import { Button } from "@/components/ui/button";
import { useToggle } from "@/hooks/use-toggle";

interface ImageFormProps {
  blockUuid: string;
  config: Background;
  updateBackground: (blockUuid: string, background: Background) => void;
}

export const ImageForm = ({
  blockUuid,
  config,
  updateBackground,
}: ImageFormProps) => {
  const [isPickImageSheetOpen, toggleIsPickImageSheetOpen] = useToggle();

  const onChangeBackgroundUrl = (url: string) => {
    updateBackground(blockUuid, { ...config, url });
  };

  const onRemoveImage = () => {
    updateBackground(blockUuid, { ...config, url: "" });
  };

  const onChangeAlt = (alt: string) => {
    updateBackground(blockUuid, { ...config, alt });
  };

  return (
    <div className="flex w-full flex-col gap-4">
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
        onSelectImageUrl={onChangeBackgroundUrl}
      />
      <Input
        label="Tekst alternatywny"
        name="alt"
        placeholder="Alt"
        value={config.alt}
        onChange={(event) => onChangeAlt(event.target.value)}
      />
    </div>
  );
};
