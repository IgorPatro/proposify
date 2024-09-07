import React, { type ChangeEvent } from "react";

import { Input } from "@/components/ui/input";

import { type TextFieldConfig } from "./type";

interface TextFieldFormProps {
  blockUuid: string;
  fieldName: string;
  config: TextFieldConfig;
  updateBlockProperty: (blockUuid: string, path: string, value: string) => void;
}

export const TextFieldForm = ({
  blockUuid,
  config,
  fieldName,
  updateBlockProperty,
}: TextFieldFormProps) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    updateBlockProperty(blockUuid, `${fieldName}.content`, event.target.value);
  };

  return (
    <Input
      key={fieldName}
      name={fieldName}
      label={fieldName}
      placeholder="Type text here"
      value={config.content}
      onChange={onChange}
    />
  );
};
