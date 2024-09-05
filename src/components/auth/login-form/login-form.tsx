import { FormikProvider, Form } from "formik";
import React from "react";

import { Button } from "@/components/base/button";
import { TextInputFormField } from "@/components/base/select";

import { useLoginFormik } from "./hooks";

export const LoginForm = () => {
  const formik = useLoginFormik();
  const { submitForm } = formik;

  return (
    <FormikProvider value={formik}>
      <Form className="flex w-80 flex-col gap-6 rounded-xl bg-white px-6 py-10 shadow-xl">
        <TextInputFormField
          name="email"
          placeholder="john.doe@gmail.com"
          label="Email"
        />
        <TextInputFormField
          name="password"
          label="Password"
          placeholder="Password"
          type="password"
        />
        <Button onClick={submitForm}>Login</Button>
      </Form>
    </FormikProvider>
  );
};
