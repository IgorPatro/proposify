import React, { type ReactNode } from "react";

export const EditorLayout = (page: ReactNode) => {
  return <main className="max-h-screen overflow-hidden">{page}</main>;
};
