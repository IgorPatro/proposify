import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { type SignupFormType } from "@/server/api/routers/auth/type";
import { api } from "@/trpc/react";
import { SignupFormValidationResolver } from "./utils";

export const useSignupForm = () => {
  const { mutateAsync: registerUser } = api.auth.register.useMutation();

  const form = useForm<SignupFormType>({
    // resolver: yupResolver(SignupFormValidationResolver),
  });

  const onSubmit: SubmitHandler<SignupFormType> = (data) => console.log(data);

  return { ...form, onSubmit: form.handleSubmit(onSubmit) };
};
