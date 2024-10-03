"use client";

import React from "react";

import { Dialog } from "@/components/base/dialog";

import { CustomerCreateForm } from "./customer-create-form";

interface TemplateCreateDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomerCreateDialog = ({
  isOpen,
  onClose,
}: TemplateCreateDialogProps) => {
  const onCreateCustomerCallback = () => {
    // TODO: Revalidate customers
    onClose();
  };

  return (
    <Dialog header="Create template" isOpen={isOpen} onClose={onClose}>
      <CustomerCreateForm onCreateCustomerCallback={onCreateCustomerCallback} />
    </Dialog>
  );
};
