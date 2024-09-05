import React, { type ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  // TODO: Here we can add max-width
  return <main className="p-4">{children}</main>;
};
