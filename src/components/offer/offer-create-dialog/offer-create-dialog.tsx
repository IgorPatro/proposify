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
            control={control}
            name="name"
            render={({ field }) => (
              <Input
                error={errors.name?.message}
                label="Name"
                placeholder="My awesome offer"
                {...field}
              />
            )}
          />
          <OfferCreateDialogCustomerSection />
          <Controller
            control={control}
            name="templateUuid"
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
            className="self-end"
            isLoading={isSubmitting}
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
