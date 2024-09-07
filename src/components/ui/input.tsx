import * as React from "react";

import { cn } from "@/lib/utils";

import { Label } from "./label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  name?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, label, name, type, ...props }, ref) => (
    <div className="relative flex flex-col gap-2">
      {label ? <Label htmlFor={name}>{label}</Label> : null}
      <input
        id={name}
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          error ? "border-destructive" : "border-input",
          className,
        )}
        ref={ref}
        {...props}
      />
      {error ? (
        <div className="absolute top-full max-w-full truncate text-xs text-destructive">
          {error}
        </div>
      ) : null}
    </div>
  ),
);
Input.displayName = "Input";

export { Input };
