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
    <div className="mb-4 bg-black p-4 text-white">
      Upuść teraz, aby dodać blok w tym miejscu
    </div>
  );
};
