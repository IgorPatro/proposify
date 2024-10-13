import React, { type ChangeEvent } from "react";

import { Input } from "@/components/base/input";
import { useEditorStore } from "@/components/editor/store";
import { Image } from "@/components/base/image";
import { HiRefresh } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { useToggle } from "@/hooks/use-toggle";
import { ImagePickerSheet } from "@/components/image-picker-sheet";

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
        <div className="relative" onClick={toggleIsPickImageSheetOpen}>
          <Image
            wrapperClassName="w-full aspect-video rounded-lg overflow-hidden p-4"
            src={logoUrl}
            alt="Image"
            width={100}
            height={100}
            className="h-full w-full object-contain object-center"
          />
          <div className="absolute left-0 top-0 flex h-full w-full cursor-pointer items-center justify-center opacity-0 hover:opacity-100">
            <HiRefresh className="h-12 w-12 text-red-800" />
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
        value={resourceName}
        onChange={handleResourceNameChange}
        name="resourceName"
        label="Name"
      />
    </div>
  );
};
