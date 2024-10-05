import React, { type ReactNode } from "react";

export const AuthLayout = (page: ReactNode) => {
  return (
    <div className="flex h-full min-h-screen w-full items-center justify-center p-4">
      {page}
    </div>
  );
};
