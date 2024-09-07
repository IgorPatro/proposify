import { yupResolver } from "@hookform/resolvers/yup";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";
import { type SubmitHandler, useForm } from "react-hook-form";

import { getDashboardHref } from "@/utils/hrefs/dashboard";

import { type LoginFormType } from "./type";
import { LoginValidationSchema } from "./utils";

export const useLoginForm = () => {
  const form = useForm<LoginFormType>({
    resolver: yupResolver(LoginValidationSchema),
  });

  const onSubmit: SubmitHandler<LoginFormType> = async (values) => {
    return console.log(values);

    try {
      const result = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });
      if (result?.ok) {
        redirect(getDashboardHref());
      }
      if (result?.error) {
        //   toast.error(result.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { form, onSubmit: form.handleSubmit(onSubmit) };
};
