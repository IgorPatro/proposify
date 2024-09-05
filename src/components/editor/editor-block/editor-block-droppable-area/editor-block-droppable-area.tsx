import React from "react";

interface EditorBlockDroppableAreaProps {
  isDraggedOver: boolean;
}

export const EditorBlockDroppableArea = ({
  isDraggedOver,
}: EditorBlockDroppableAreaProps) => {
  if (!isDraggedOver) {
    return null;
  }

  return <div>Drop here</div>;
};
