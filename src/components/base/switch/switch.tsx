import { type Root as SwitchRoot } from "@radix-ui/react-switch";
import React, { forwardRef } from "react";

import { Label } from "@/components/ui/label";
import { Switch as SwitchPrimitive } from "@/components/ui/switch";

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchRoot> {
  error?: string;
  label?: string;
  name?: string;
}

export const Switch = forwardRef<
  React.ElementRef<typeof SwitchRoot>,
  SwitchProps
>(({ error, label, name, ...props }, ref) => {
  return (
    <div className="relative flex items-center gap-1">
      <SwitchPrimitive
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

Switch.displayName = "Switch";
