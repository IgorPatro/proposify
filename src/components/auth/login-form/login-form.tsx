"use client";

import React from "react";
import { Controller } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useLoginForm } from "./hooks";

export const LoginForm = () => {
  const { form, onSubmit } = useLoginForm();
  const {
    control,
    formState: { errors },
  } = form;

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-80 flex-col gap-6 rounded-xl bg-white px-6 py-10 shadow-xl"
    >
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
      <Button type="submit">Login</Button>
    </form>
  );
};
