import React, { type ReactNode } from "react";

interface LayoutAuthProps {
  children: ReactNode;
}

export const LayoutAuth = ({ children }: LayoutAuthProps) => {
  return (
    // TODO: Here we can add max-width
    <main className="flex h-full min-h-screen w-full items-center justify-center p-4">
      {children}
    </main>
  );
};
