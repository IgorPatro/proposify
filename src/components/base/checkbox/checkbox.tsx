import React, { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface CheckboxProps {
  name: string;
  onChange: (isChecked: boolean) => void;
  checked: boolean;
  error?: string;
  label?: ReactNode;
}

export const Checkbox = ({
  checked,
  error,
  label,
  name,
  onChange,
}: CheckboxProps) => {
  return (
    <div className={twMerge("relative flex w-full items-center gap-2")}>
      {label ? (
        <label
          className="mb-1 block text-sm font-medium text-gray-900"
          htmlFor={`text-input-${name}`}
        >
          {label}
        </label>
      ) : null}
      <input
        type="checkbox"
        checked={checked}
        id={`text-input-${name}`}
        onChange={(e) => onChange(e.target.checked)}
        className={twMerge(
          "w-full rounded-md border border-gray-900 bg-gray-50 px-3 py-2 text-sm",
          error
            ? "border-red-500 ring-red-500 focus:border-red-500 focus:ring-red-500"
            : "",
        )}
      />
      {error ? (
        <div className="absolute inset-x-0 mx-1 mt-0.5 truncate text-xs text-red-500">
          {error}
        </div>
      ) : null}
    </div>
  );
};
