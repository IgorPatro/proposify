import React, { type ReactNode } from "react";

import { EditorNavigation } from "@/components/navigation/editor-navigation";

interface EditorLayoutProps {
  children: ReactNode;
}

const EditorLayout = ({ children }: EditorLayoutProps) => {
  return (
    <main className="max-h-screen overflow-hidden">
      <EditorNavigation />
      <div className="flex w-full bg-zinc-500">{children}</div>;
    </main>
  );
};

export default EditorLayout;
