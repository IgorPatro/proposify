import React, { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface TextInputProps {
  name: string;
  placeholder?: string;
  onChange: (value: string) => void;
  value: string | undefined;
  type?: "text" | "password";
  error?: string;
  label?: ReactNode;
}

export const TextInput = ({
  error,
  label,
  name,
  onChange,
  placeholder,
  type = "text",
  value,
}: TextInputProps) => {
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
      <input
        value={value}
        id={`text-input-${name}`}
        onChange={(e) => onChange(e.target.value)}
        className={twMerge(
          "w-full rounded-md border border-gray-900 bg-gray-50 px-3 py-2 text-sm",
          error
            ? "border-red-500 ring-red-500 focus:border-red-500 focus:ring-red-500"
            : "",
        )}
        placeholder={placeholder}
        type={type}
      />
      {error ? (
        <div className="absolute inset-x-0 mx-1 mt-0.5 truncate text-xs text-red-500">
          {error}
        </div>
      ) : null}
    </div>
  );
};
