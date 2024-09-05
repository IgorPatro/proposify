import React, { type ReactNode } from "react";

import { HomeNavigation } from "../navigation/home-navigation";

interface LayoutHomeProps {
  children: ReactNode;
}

export const LayoutHome = ({ children }: LayoutHomeProps) => {
  return (
    <>
      <HomeNavigation />
      <main className="flex w-full items-center justify-center p-4">
        {children}
      </main>
    </>
  );
};
