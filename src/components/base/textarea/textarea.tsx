import React, { forwardRef, type TextareaHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import { Label } from "@/components/ui/label";
import { Textarea as TextareaPrimitive } from "@/components/ui/textarea";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  label?: string;
  name?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, label, name, ...props }, ref) => {
    return (
      <div className="relative flex flex-col gap-2">
        {label ? <Label htmlFor={name}>{label}</Label> : null}
        <TextareaPrimitive
          className={twMerge(
            error ? "border-destructive" : "",
            props.className,
          )}
          id={name}
          ref={ref}
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

Textarea.displayName = "Textarea";
