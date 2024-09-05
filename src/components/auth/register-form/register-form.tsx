import { FormikProvider, Form } from "formik";
import React from "react";

import { Button } from "@/components/base/button";
import { TextInputFormField } from "@/components/base/select";

import { useRegisterFormik } from "./hooks";

export const RegisterForm = () => {
  const formik = useRegisterFormik();
  const { setFieldValue, submitForm, values } = formik;

  return (
    <FormikProvider value={formik}>
      <Form className="flex w-80 flex-col gap-6 rounded-xl bg-white px-6 py-10 shadow-xl">
        <div className="flex gap-4">
          <TextInputFormField
            name="firstName"
            label="Name"
            placeholder="Name"
          />
          <TextInputFormField
            name="lastName"
            label="Last name"
            placeholder="Last name"
          />
        </div>
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
        <TextInputFormField
          name="confirmPassword"
          label="Confirm password"
          placeholder="Confirm password"
          type="password"
        />
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            onChange={(e) => setFieldValue("privacyChecked", e.target.checked)}
            checked={values.privacyChecked}
          />
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            fugiat.
          </p>
        </div>
        <Button onClick={submitForm}>Register</Button>
      </Form>
    </FormikProvider>
  );
};
