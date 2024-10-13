import React, { forwardRef, type InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import { Input as InputPrimitive } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "value"> {
  error?: string;
  label?: string;
  name?: string;
  value: string | null | undefined;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, label, name, value, ...props }, ref) => {
    return (
      <div className="relative flex flex-col gap-2">
        {label ? <Label htmlFor={name}>{label}</Label> : null}
        <InputPrimitive
          value={value ?? ""}
          id={name}
          ref={ref}
          className={twMerge(
            error ? "border-destructive" : "",
            props.className,
          )}
          {...props}
        />
        {error ? (
          <div className="absolute top-full max-w-full truncate text-xs text-destructive">
            {error}
          </div>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";
