import React, { type ReactNode } from "react";

interface EditorLayoutProps {
  children: ReactNode;
}

const EditorLayout = ({ children }: EditorLayoutProps) => {
  return (
    <>
      <nav className="fixed left-0 top-0 h-14 w-full bg-gray-200 p-3">
        EditorNavigation
      </nav>
      <main className="flex w-full bg-zinc-500">{children}</main>;
    </>
  );
};

export default EditorLayout;
