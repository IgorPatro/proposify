"use client";

import React from "react";
import { Controller } from "react-hook-form";

import { Input } from "@/components/base/input";
import { Button } from "@/components/ui/button";

import { useLoginForm } from "./hooks";

export const LoginForm = () => {
  const { form, onSubmit } = useLoginForm();
  const {
    control,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <form
      className="flex w-80 flex-col gap-6 rounded-xl bg-white px-6 py-10 shadow-xl"
      onSubmit={onSubmit}
    >
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
      <Button isLoading={isSubmitting} type="submit">
        Login
      </Button>
    </form>
  );
};
