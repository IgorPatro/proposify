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
      className="flex w-96 flex-col gap-6 rounded-xl bg-white px-6 py-10 shadow-xl"
      onSubmit={onSubmit}
    >
      <div className="flex gap-4">
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
            placeholder="john.doe@gmail.com"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <Input
            error={errors.password?.message}
            label="Password"
            placeholder="Password"
            type="password"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="confirmPassword"
        render={({ field }) => (
          <Input
            error={errors.confirmPassword?.message}
            label="Confirm password"
            placeholder="Password"
            type="password"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="termsAccepted"
        render={({ field }) => (
          <Checkbox
            checked={field.value}
            error={errors.termsAccepted?.message}
            label="Accept terms and conditions"
            name="termsAccepted"
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
