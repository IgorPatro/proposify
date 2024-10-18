import React, { type ReactNode } from "react";

export const AuthLayout = (page: ReactNode) => {
  return (
    <div className="flex size-full min-h-screen items-center justify-center p-4">
      {page}
    </div>
  );
};
