import React, { useEffect, useRef } from "react";

interface EditorBlockDroppableAreaProps {
  isDraggedOver: boolean;
}

export const EditorBlockDroppableArea = ({
  isDraggedOver,
}: EditorBlockDroppableAreaProps) => {
  if (!isDraggedOver) {
    return null;
  }

  return (
    <div className="mb-4 rounded-lg bg-black p-8 text-white">
      Upuść teraz, aby dodać blok w tym miejscu
    </div>
  );
};
