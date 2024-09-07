"use client";

import React from "react";
import { Controller } from "react-hook-form";

import { Dialog } from "@/components/base/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useTemplateCreateForm } from "./hooks";

interface TemplateCreateDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TemplateCreateDialog = ({
  isOpen,
  onClose,
}: TemplateCreateDialogProps) => {
  const { form, onSubmit } = useTemplateCreateForm();
  const {
    control,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <Dialog header="Create template" isOpen={isOpen} onClose={onClose}>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input
              label="Name"
              placeholder="My awesome template"
              error={errors.name?.message}
              {...field}
            />
          )}
        />
        <Button isLoading={isSubmitting} className="self-end" type="submit">
          Create
        </Button>
      </form>
    </Dialog>
  );
};
