"use client";

import React from "react";
import { Controller } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useSignupForm } from "./hooks";

export const SignupForm = () => {
  const {
    control,
    formState: { errors },
    onSubmit,
    register,
  } = useSignupForm();

  console.log(errors);

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-96 flex-col gap-6 rounded-xl bg-white px-6 py-10 shadow-xl"
    >
      <div className="flex gap-4">
        <Input
          // error={errors.firstName?.message}
          {...register("firstName")}
          placeholder="John"
          // label="First name"
        />
        <Input
          error={errors.lastName?.message}
          {...register("lastName")}
          placeholder="Doe"
          label={"Last name"}
        />
      </div>
      <Input {...register("email")} placeholder="john.doe@gmail.com" />
      <Input {...register("password")} placeholder="Password" type="password" />
      <Input
        {...register("confirmPassword")}
        placeholder="Confirm password"
        type="password"
      />
      <div className="flex items-center space-x-2">
        {/* <Controller
          name="termsAccepted"
          control={control}
          render={({ field }) => (
            <Checkbox
              checked={field.value}
              onCheckedChange={(checked) => field.onChange(checked)}
            />
          )}
        /> */}
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <Button type="submit">Sign up</Button>
    </form>
  );
};
