import React from "react";
import { Controller } from "react-hook-form";
import { twMerge } from "tailwind-merge";

import { Input } from "@/components/base/input";
import { Button } from "@/components/ui/button";
import { type Customer } from "@/server/api/customer/types";

import { useCustomerCreateForm } from "./hooks";

interface CustomerCreateFormProps {
  formClassName?: string;
  onCreateCustomerCallback?: (customer: Customer) => void;
}

export const CustomerCreateForm = ({
  formClassName,
  onCreateCustomerCallback,
}: CustomerCreateFormProps) => {
  const { form, onSubmit } = useCustomerCreateForm(onCreateCustomerCallback);
  const {
    control,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <form className={twMerge("flex flex-col gap-4", formClassName)}>
      <div className="flex gap-2">
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
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <Input
              label="Last name"
              placeholder="Doe"
              error={errors.lastName?.message}
              {...field}
            />
          )}
        />
      </div>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input
            label="Email"
            placeholder="john.doe@user.com"
            error={errors.email?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <Input
            label="Phone"
            placeholder="+48 432 434 434"
            error={errors.phone?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="street"
        control={control}
        render={({ field }) => (
          <Input
            label="Ulica i numer"
            placeholder="Złota 44"
            error={errors.street?.message}
            {...field}
          />
        )}
      />
      <div className="flex gap-2">
        <Controller
          name="zipCode"
          control={control}
          render={({ field }) => (
            <Input
              label="Kod pocztowy"
              placeholder="31-141"
              error={errors.zipCode?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <Input
              label="Miasto"
              placeholder="Warszawa"
              error={errors.city?.message}
              {...field}
            />
          )}
        />
      </div>
      <Button
        onClick={onSubmit}
        isLoading={isSubmitting}
        className="self-end"
        type="button"
      >
        Create
      </Button>
    </form>
  );
};
