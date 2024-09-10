import React from "react";
import { Controller } from "react-hook-form";

import { Input } from "@/components/base/input";
import { Button } from "@/components/ui/button";

import { useCustomerCreateForm } from "./hooks";

export const CustomerCreateForm = () => {
  const { form, onSubmit } = useCustomerCreateForm();
  const {
    control,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => (
          <Input
            label="First name"
            placeholder="John"
            error={errors.firstName?.message}
            {...field}
          />
        )}
      />
      <Button isLoading={isSubmitting} className="self-end" type="submit">
        Create
      </Button>
    </form>
  );
};
