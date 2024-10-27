import React, { ReactNode } from "react";
import { Controller } from "react-hook-form";
import { twMerge } from "tailwind-merge";

import { Input } from "@/components/base/input";
import { Button } from "@/components/ui/button";
import { type Customer } from "@/server/api/customer/types";

import { useCustomerCreateForm } from "./hooks";

interface CustomerCreateFormProps {
  formClassName?: string;
  footerClassName?: string;
  footer?: ReactNode;
  onCreateCustomerCallback?: (customer: Customer) => void;
}

export const CustomerCreateForm = ({
  formClassName,
  footerClassName,
  footer,
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
          control={control}
          name="firstName"
          render={({ field }) => (
            <Input
              error={errors.firstName?.message}
              label="First name"
              placeholder="John"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="lastName"
          render={({ field }) => (
            <Input
              error={errors.lastName?.message}
              label="Last name"
              placeholder="Doe"
              {...field}
            />
          )}
        />
      </div>
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <Input
            error={errors.email?.message}
            label="Email"
            placeholder="john.doe@user.com"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="phone"
        render={({ field }) => (
          <Input
            error={errors.phone?.message}
            label="Phone"
            placeholder="+48 432 434 434"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="street"
        render={({ field }) => (
          <Input
            error={errors.street?.message}
            label="Ulica i numer"
            placeholder="Złota 44"
            {...field}
          />
        )}
      />
      <div className="flex w-full gap-2">
        <Controller
          control={control}
          name="zipCode"
          render={({ field }) => (
            <Input
              error={errors.zipCode?.message}
              label="Kod pocztowy"
              placeholder="31-141"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="city"
          render={({ field }) => (
            <Input
              error={errors.city?.message}
              label="Miasto"
              placeholder="Warszawa"
              {...field}
            />
          )}
        />
      </div>
      <footer className={twMerge("self-end", footerClassName)}>
        {footer}
        <Button isLoading={isSubmitting} type="button" onClick={onSubmit}>
          Stwórz klienta
        </Button>
      </footer>
    </form>
  );
};
