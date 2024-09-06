import { useFormik } from "formik";

import { type RegisterFormType } from "@/server/api/routers/auth/type";
import { api } from "@/trpc/react";

import { RegisterValidationSchema } from "./utils";

export const useSignupFormik = () => {
  const { mutateAsync: registerUser } = api.auth.register.useMutation();

  return useFormik<RegisterFormType>({
    initialValues: {
      confirmPassword: "",
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      privacyChecked: false,
    },
    onSubmit: async (values) => {
      const newUser = await registerUser(values);
    },
    validateOnChange: false,
    validationSchema: RegisterValidationSchema,
  });
};
