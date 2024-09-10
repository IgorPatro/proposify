"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import * as React from "react";

import { cn } from "@/utils/ui";

import { Label } from "./label";

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  error?: string;
  label?: string;
  name?: string;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, error, label, name, ...props }, ref) => (
  <div className="relative flex items-center gap-1">
    <CheckboxPrimitive.Root
      id={name}
      ref={ref}
      className={cn(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        error ? "border-destructive" : "border-input",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        <Check className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    {label ? <Label htmlFor={name}>{label}</Label> : null}
    {error ? (
      <div className="absolute top-full max-w-full truncate text-xs text-destructive">
        {error}
      </div>
    ) : null}
  </div>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
