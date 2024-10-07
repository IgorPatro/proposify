import React from "react";
import { HiMiniArrowLeft, HiPlay } from "react-icons/hi2";
import { IoIosSave } from "react-icons/io";

import { Button } from "@/components/ui/button";

interface EditorNavigationProps {
  isOffer?: boolean;
}

export const EditorNavigation = ({
  isOffer = false,
}: EditorNavigationProps) => {
  return (
    <nav className="fixed left-0 top-0 flex h-14 w-full items-center justify-between border-b border-gray-700 bg-background p-3 text-white drop-shadow-2xl">
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="gap-1 text-sm">
          <HiMiniArrowLeft />
          Wróć
        </Button>
        <h1 className="text-lg font-semibold">
          {isOffer ? "Offer" : "Template"} Editor
        </h1>
      </div>
      <div className="flex items-center">
        <Button variant="ghost" className="gap-1 text-sm">
          <HiPlay />
          Preview
        </Button>
        <Button variant="ghost" className="gap-1 text-sm">
          <IoIosSave />
          Zapisz
        </Button>
      </div>
    </nav>
  );
};
