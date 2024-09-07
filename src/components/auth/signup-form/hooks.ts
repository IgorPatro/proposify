import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm, type SubmitHandler } from "react-hook-form";

import { type SignupFormType } from "@/server/api/routers/auth/type";
import { api } from "@/trpc/react";
import { getLoginHref } from "@/utils/hrefs/auth";

import { SignupFormValidationResolver } from "./utils";

export const useSignupForm = () => {
  const router = useRouter();

  const { mutateAsync: registerUser } = api.auth.register.useMutation();

  const form = useForm<SignupFormType>({
    resolver: zodResolver(SignupFormValidationResolver),
  });

  const onSubmit: SubmitHandler<SignupFormType> = async (data) => {
    try {
      const user = await registerUser(data);
      router.push(getLoginHref());
    } catch (error) {
      console.log(error);
    }
  };

  return { ...form, onSubmit: form.handleSubmit(onSubmit) };
};
