import React, { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  name: string;
  onChange: (value: string) => void;
  options: Option[];
  value: string | undefined;
  error?: string;
  label?: ReactNode;
}

export const Select = ({
  error,
  label,
  name,
  onChange,
  options,
  value,
}: SelectProps) => {
  return (
    <div className={twMerge("relative w-full")}>
      {label ? (
        <label
          className="mb-1 block text-sm font-medium text-gray-900"
          htmlFor={`text-input-${name}`}
        >
          {label}
        </label>
      ) : null}
      <select
        value={value}
        id={`text-input-${name}`}
        onChange={(e) => onChange(e.target.value)}
        className={twMerge(
          "w-full rounded-md border border-gray-900 bg-gray-50 px-3 py-2 text-sm",
          error
            ? "border-red-500 ring-red-500 focus:border-red-500 focus:ring-red-500"
            : "",
        )}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? (
        <div className="absolute inset-x-0 mx-1 mt-0.5 truncate text-xs text-red-500">
          {error}
        </div>
      ) : null}
    </div>
  );
};
