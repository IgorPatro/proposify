import React from "react";

import { Label } from "@/components/ui/label";
import {
  Select as SelectPrimitive,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  error?: string;
  label?: string;
  name: string;
  options: Option[];
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
}

export const Select = ({
  error,
  label,
  name,
  onChange,
  options,
  placeholder,
  value,
}: SelectProps) => {
  return (
    <div className="relative flex flex-col gap-2">
      {label ? <Label htmlFor={name}>{label}</Label> : null}
      <SelectPrimitive name={name} value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectPrimitive>
      {error ? (
        <div className="absolute top-full max-w-full truncate text-xs text-destructive">
          {error}
        </div>
      ) : null}
    </div>
  );
};
