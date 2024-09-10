"use client";

import React from "react";
import { Controller } from "react-hook-form";

import { Checkbox } from "@/components/base/checkbox";
import { Input } from "@/components/base/input";
import { Button } from "@/components/ui/button";

import { useSignupForm } from "./hooks";

export const SignupForm = () => {
  const {
    control,
    formState: { errors, isSubmitting },
    onSubmit,
  } = useSignupForm();

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-96 flex-col gap-6 rounded-xl bg-white px-6 py-10 shadow-xl"
    >
      <div className="flex gap-4">
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
            placeholder="john.doe@gmail.com"
            error={errors.email?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Input
            label="Password"
            placeholder="Password"
            type="password"
            error={errors.password?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="confirmPassword"
        control={control}
        render={({ field }) => (
          <Input
            label="Confirm password"
            placeholder="Password"
            type="password"
            error={errors.confirmPassword?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="termsAccepted"
        control={control}
        render={({ field }) => (
          <Checkbox
            name="termsAccepted"
            label="Accept terms and conditions"
            error={errors.termsAccepted?.message}
            checked={field.value}
            onCheckedChange={(checked) => field.onChange(checked)}
          />
        )}
      />
      <Button isLoading={isSubmitting} type="submit">
        Sign up
      </Button>
    </form>
  );
};
