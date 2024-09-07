"use client";

import React, { useState } from "react";
import { Controller } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { useTemplateCreateForm } from "./hooks";

export const TemplateCreateDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { form, onSubmit } = useTemplateCreateForm();
  const {
    control,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <Dialog open={isOpen}>
      <Button onClick={() => setIsOpen((prev) => !prev)}>
        Create template
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create template</DialogTitle>
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
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
