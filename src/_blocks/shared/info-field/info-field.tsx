import React, { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

import { type ThemeSchema } from "@/_themes/type";

import { twUtils } from "../utils";

interface InfoFieldProps {
  children: ReactNode;
  label: string;
  theme: ThemeSchema;
}

export const InfoField = ({ children, label, theme }: InfoFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className={twMerge(twUtils.color(theme.text.primary))}>
        {label}
      </label>
      <span
        className={twMerge("font-semibold", twUtils.color(theme.text.primary))}
      >
        {children}
      </span>
    </div>
  );
};
