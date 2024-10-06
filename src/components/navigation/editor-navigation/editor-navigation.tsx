import React from "react";

import { Button } from "@/components/ui/button";

interface EditorNavigationProps {
  isOffer?: boolean;
}

export const EditorNavigation = ({
  isOffer = false,
}: EditorNavigationProps) => {
  return (
    <nav className="fixed left-0 top-0 flex h-14 w-full items-center justify-between bg-gray-800 p-3 text-white drop-shadow-2xl">
      <div className="flex items-center gap-4">
        <Button className="text-sm">Back</Button>
        <h1 className="text-lg font-semibold">
          {isOffer ? "Offer" : "Template"} Editor
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <Button className="text-sm">Preview</Button>
        TODO: Save button
      </div>
    </nav>
  );
};
