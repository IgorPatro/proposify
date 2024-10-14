import { atom, useAtom } from "jotai";

const isEditorDragMode = atom(false);

export const useIsEditorDragMode = () => {
  return useAtom(isEditorDragMode);
};
