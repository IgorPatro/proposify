"use client";

import React from "react";
import { Controller } from "react-hook-form";

import { Dialog } from "@/components/base/dialog";
import { Input } from "@/components/base/input";
import { Button } from "@/components/ui/button";

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
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <Input
              error={errors.name?.message}
              label="Name"
              placeholder="My awesome template"
              {...field}
            />
          )}
        />
        <Button className="self-end" isLoading={isSubmitting} type="submit">
          Create
        </Button>
      </form>
    </Dialog>
  );
};
