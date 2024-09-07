"use client";

import React, { type ReactNode } from "react";

import {
  Dialog as DialogPrimitive,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  header: string;
}

export const Dialog = ({ children, header, isOpen, onClose }: DialogProps) => {
  return (
    <DialogPrimitive open={isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{header}</DialogTitle>
          {children}
        </DialogHeader>
      </DialogContent>
    </DialogPrimitive>
  );
};
