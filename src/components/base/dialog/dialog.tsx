import React, { type ReactNode } from "react";

import {
  Dialog as DialogPrimitive,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

interface DialogProps {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Dialog = ({
  children,
  footer,
  header,
  isOpen,
  onClose,
}: DialogProps) => {
  return (
    <DialogPrimitive open={isOpen}>
      <DialogContent onClose={onClose}>
        <DialogHeader
          onClose={onClose}
          className="flex w-full items-start justify-between border-b p-4"
        >
          <DialogTitle>{header}</DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto p-6">{children}</div>
        <DialogFooter className="p-4">{footer}</DialogFooter>
      </DialogContent>
    </DialogPrimitive>
  );
};
