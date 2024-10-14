import React from "react";
import { HiMiniArrowLeft, HiPlay } from "react-icons/hi2";
import { IoIosSave } from "react-icons/io";

import { Button } from "@/components/ui/button";
import {
  getEditorOfferPreviewHref,
  getEditorTemplatePreviewHref,
} from "@/utils/hrefs/editor";
import { getEditorNavigationHeader } from "./utils";

interface EditorNavigationProps {
  isOffer?: boolean;
  isLoading: boolean;
  onSave: () => Promise<void>;
  onGoBack: () => void;
  resourceUuid: string;
  resourceName?: string;
}

export const EditorNavigation = ({
  isLoading,
  isOffer = false,
  onGoBack,
  onSave,
  resourceUuid,
  resourceName,
}: EditorNavigationProps) => {
  const onPreviewOpen = () => {
    if (isOffer) {
      return window.open(getEditorOfferPreviewHref(resourceUuid), "_blank");
    }

    return window.open(getEditorTemplatePreviewHref(resourceUuid), "_blank");
  };

  return (
    <nav className="fixed left-0 top-0 flex h-14 w-full items-center justify-between border-b border-gray-700 bg-background p-3 text-white drop-shadow-2xl">
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="gap-1 text-sm" onClick={onGoBack}>
          <HiMiniArrowLeft />
          Wróć
        </Button>
        <h1 className="text-md font-semibold">
          {getEditorNavigationHeader(isOffer, resourceName)}
        </h1>
      </div>
      <div className="flex items-center">
        <Button
          variant="ghost"
          className="gap-1 text-sm"
          onClick={onPreviewOpen}
        >
          <HiPlay />
          Preview
        </Button>
        <Button
          isLoading={isLoading}
          onClick={onSave}
          variant="ghost"
          className="gap-1 text-sm"
        >
          <IoIosSave />
          Zapisz
        </Button>
      </div>
    </nav>
  );
};
