"use client";

import React from "react";
import { Controller, FormProvider } from "react-hook-form";

import { Dialog } from "@/components/base/dialog";
import { Input } from "@/components/base/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { api } from "@/utils/api";

import { useOfferCreateForm } from "./hooks";
import { OfferCreateDialogCustomerSection } from "./offer-create-dialog-customer-section";

interface OfferCreateDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OfferCreateDialog = ({
  isOpen,
  onClose,
}: OfferCreateDialogProps) => {
  const { form, onSubmit } = useOfferCreateForm();
  const {
    control,
    formState: { errors, isSubmitting },
  } = form;

  const { data: templates } = api.template.getAll.useQuery();

  return (
    <Dialog header="Create offer" isOpen={isOpen} onClose={onClose}>
      <FormProvider {...form}>
        <div className="flex flex-col gap-4">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                label="Name"
                placeholder="My awesome offer"
                error={errors.name?.message}
                {...field}
              />
            )}
          />
          <OfferCreateDialogCustomerSection />
          <Controller
            name="templateUuid"
            control={control}
            render={({ field }) => (
              <Select
                name="templateUuid"
                value={field.value}
                onValueChange={(value) => field.onChange(value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select template" />
                </SelectTrigger>
                <SelectContent>
                  {templates?.map((template) => (
                    <SelectItem key={template.uuid} value={template.uuid}>
                      {template.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <Button
            isLoading={isSubmitting}
            className="self-end"
            type="button"
            onClick={onSubmit}
          >
            Create
          </Button>
        </div>
      </FormProvider>
    </Dialog>
  );
};
