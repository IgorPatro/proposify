import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm, type SubmitHandler } from "react-hook-form";

import { type SignupFormType } from "@/server/api/auth/type";
import { api } from "@/utils/api";
import { getLoginHref } from "@/utils/hrefs/auth";

import { SignupFormValidationResolver } from "./utils";

export const useSignupForm = () => {
  const router = useRouter();

  const { mutateAsync: signUp } = api.auth.signUp.useMutation();

  const form = useForm<SignupFormType>({
    defaultValues: {
      confirmPassword: "",
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      termsAccepted: false,
    },
    resolver: zodResolver(SignupFormValidationResolver),
  });

  const onSubmit: SubmitHandler<SignupFormType> = async (data) => {
    try {
      const user = await signUp(data);
      router.push(getLoginHref());
    } catch (error) {
      console.log(error);
    }
  };

  return { ...form, onSubmit: form.handleSubmit(onSubmit) };
};
