"use client";

import React from "react";
import { Controller } from "react-hook-form";

import { Dialog } from "@/components/base/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useOfferCreateForm } from "./hooks";
import { api } from "@/server/trpc";

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
  const { data: customers } = api.customer.getAllCustomersMinified.useQuery();
  const { data: templates } = api.template.getAll.useQuery();

  return (
    <Dialog header="Create offer" isOpen={isOpen} onClose={onClose}>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
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
        <Controller
          name="customerUuid"
          control={control}
          render={({ field }) => (
            <Select
              name="customerUuid"
              value={field.value}
              onValueChange={(value) => field.onChange(value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select customer" />
              </SelectTrigger>
              <SelectContent>
                {customers?.map((customer) => (
                  <SelectItem key={customer.uuid} value={customer.uuid}>
                    {customer.email}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
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
        <Button isLoading={isSubmitting} className="self-end" type="submit">
          Create
        </Button>
      </form>
    </Dialog>
  );
};
