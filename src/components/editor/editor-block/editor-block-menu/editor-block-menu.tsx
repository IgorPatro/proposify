import React from "react";
import { FaTrashAlt } from "react-icons/fa";

import { useEditorStore } from "../../store";

interface EditorBlockMenuProps {
  isSelected: boolean;
  blockUuid: string;
}

export const EditorBlockMenu = ({
  blockUuid,
  isSelected,
}: EditorBlockMenuProps) => {
  const removeBlock = useEditorStore((store) => store.removeBlock);

  if (!isSelected) {
    return null;
  }

  return (
    <div className="absolute right-4 top-4 flex gap-2">
      <button
        onClick={() => removeBlock(blockUuid)}
        className="rounded-full bg-white p-2 shadow-xl"
      >
        <FaTrashAlt className="h-6 w-6 text-red-500" />
      </button>
    </div>
  );
};
