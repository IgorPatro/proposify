import React from "react";

import {
  Select as SelectPrimitive,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  name: string;
  value?: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
}

export const Select = ({
  name,
  onChange,
  options,
  placeholder,
  value,
}: SelectProps) => {
  return (
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
  );
};
