import React, { type ReactNode } from "react";

import { EditorNavigation } from "../navigation/editor-navigation";

interface LayoutEditorProps {
  children: ReactNode;
}

export const LayoutEditor = ({ children }: LayoutEditorProps) => {
  return (
    <>
      <EditorNavigation />
      <main className="flex w-full bg-zinc-500">{children}</main>
    </>
  );
};
