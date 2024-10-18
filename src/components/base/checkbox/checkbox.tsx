import { type Root as CheckboxRoot } from "@radix-ui/react-checkbox";
import React, { forwardRef } from "react";

import { Checkbox as CheckboxPrimitive } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxRoot> {
  error?: string;
  label?: string;
  name?: string;
}

export const Checkbox = forwardRef<
  React.ElementRef<typeof CheckboxRoot>,
  CheckboxProps
>(({ error, label, name, ...props }, ref) => {
  return (
    <div className="relative flex items-center gap-1">
      <CheckboxPrimitive
        className={error ? "border-destructive" : "border-input"}
        id={name}
        ref={ref}
        {...props}
      />
      {label ? <Label htmlFor={name}>{label}</Label> : null}
      {error ? (
        <div className="absolute top-full max-w-full truncate text-xs text-destructive">
          {error}
        </div>
      ) : null}
    </div>
  );
});

Checkbox.displayName = "Checkbox";
