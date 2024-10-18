import React, { type ChangeEvent } from "react";
import { HiRefresh } from "react-icons/hi";

import { Image } from "@/components/base/image";
import { Input } from "@/components/base/input";
import { useEditorStore } from "@/components/editor/store";
import { ImagePickerSheet } from "@/components/image-picker-sheet";
import { Button } from "@/components/ui/button";
import { useToggle } from "@/hooks/use-toggle";

export const EditorSidebarResourceSettings = () => {
  const [isPickImageSheetOpen, toggleIsPickImageSheetOpen] = useToggle();
  const updateResourceName = useEditorStore((store) => store.updateName);
  const updateLogoUrl = useEditorStore((store) => store.updateLogoUrl);
  const resourceName = useEditorStore((store) => store.name);
  const logoUrl = useEditorStore((store) => store.logoUrl);

  const handleResourceNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateResourceName(e.target.value);
  };

  return (
    <div className="flex flex-col gap-3">
      {logoUrl ? (
        <div className="relative">
          <Image
            alt="Image"
            className="size-full object-contain object-center"
            height={100}
            src={logoUrl}
            width={100}
            wrapperClassName="w-full aspect-video rounded-lg overflow-hidden p-4"
          />
          <div className="absolute left-0 top-0 flex size-full items-center justify-center bg-black/50 opacity-0 hover:opacity-100">
            <HiRefresh
              className="size-6 cursor-pointer text-white"
              onClick={toggleIsPickImageSheetOpen}
            />
          </div>
        </div>
      ) : (
        <Button onClick={toggleIsPickImageSheetOpen}>Wybierz zdjęcie</Button>
      )}
      <ImagePickerSheet
        isOpen={isPickImageSheetOpen}
        onClose={toggleIsPickImageSheetOpen}
        onSelectImageUrl={(url) => updateLogoUrl(url)}
      />
      <Input
        label="Name"
        name="resourceName"
        value={resourceName}
        onChange={handleResourceNameChange}
      />
    </div>
  );
};
