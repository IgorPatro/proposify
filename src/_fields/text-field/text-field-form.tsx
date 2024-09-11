import React, { type ChangeEvent } from "react";

import { Textarea } from "@/components/base/textarea";

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
  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    updateBlockProperty(blockUuid, `${fieldName}.content`, event.target.value);
  };

  return (
    <Textarea
      key={fieldName}
      name={fieldName}
      label={fieldName}
      placeholder="Type text here"
      value={config.content}
      onChange={onChange}
      rows={5}
    />
  );
};
