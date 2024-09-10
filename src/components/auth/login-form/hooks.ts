import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { type SubmitHandler, useForm } from "react-hook-form";

import { getDashboardHref } from "@/utils/hrefs/dashboard";

import { type LoginFormType } from "./type";
import { LoginFormValidationResolver } from "./utils";

export const useLoginForm = () => {
  const router = useRouter();

  const form = useForm<LoginFormType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginFormValidationResolver),
  });

  const onSubmit: SubmitHandler<LoginFormType> = async (data) => {
    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.ok) {
        router.push(getDashboardHref());
      }
      if (result?.error) {
        console.log(result.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { form, onSubmit: form.handleSubmit(onSubmit) };
};
