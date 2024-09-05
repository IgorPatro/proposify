import { useFormik } from "formik";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

import { type LoginFormType } from "./type";
import { LoginValidationSchema } from "./utils";

export const useLoginFormik = () => {
  const { push } = useRouter();

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
          await push({
            pathname: "/home",
          });
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
