import { useFormik } from "formik";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";

import { getDashboardHref } from "@/utils/hrefs/dashboard";

import { type LoginFormType } from "./type";
import { LoginValidationSchema } from "./utils";

export const useLoginFormik = () => {
  return useFormik<LoginFormType>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
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
    },
    validateOnChange: false,
    validationSchema: LoginValidationSchema,
  });
};
