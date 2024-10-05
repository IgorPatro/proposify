import React, { type ReactNode } from "react";

interface EditorLayoutProps {
  children: ReactNode;
}

const EditorLayout = ({ children }: EditorLayoutProps) => {
  return <main className="max-h-screen overflow-hidden">{children}</main>;
};

export default EditorLayout;
