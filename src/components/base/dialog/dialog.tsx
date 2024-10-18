"use client";

import React, { type ReactNode } from "react";

import {
  Dialog as DialogPrimitive,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface DialogProps {
  children: ReactNode;
  header: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Dialog = ({ children, header, isOpen, onClose }: DialogProps) => {
  return (
    <DialogPrimitive open={isOpen}>
      <DialogContent onClose={onClose}>
        <DialogHeader>
          <DialogTitle>{header}</DialogTitle>
          {children}
        </DialogHeader>
      </DialogContent>
    </DialogPrimitive>
  );
};
