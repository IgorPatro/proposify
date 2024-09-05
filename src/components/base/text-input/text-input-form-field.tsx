import { useField } from "formik";
import React, { type ReactNode } from "react";

import { TextInput } from "./text-input";

interface TextInputFormFieldProps {
  name: string;
  placeholder?: string;
  type?: "text" | "password";
  label?: ReactNode;
}

export const TextInputFormField = ({
  label,
  name,
  placeholder,
  type,
}: TextInputFormFieldProps) => {
  const [field, meta, helper] = useField<string>(name);

  const handleChange = async (value: string) => {
    await helper.setValue(value);
  };

  return (
    <TextInput
      label={label}
      name={name}
      placeholder={placeholder}
      type={type}
      onChange={handleChange}
      value={field.value}
      error={meta.error}
    />
  );
};
