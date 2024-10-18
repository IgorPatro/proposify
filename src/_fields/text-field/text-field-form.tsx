import React, { type ChangeEvent } from "react";

import { Textarea } from "@/components/base/textarea";

import { type TextFieldConfig } from "./type";

interface TextFieldFormProps {
  blockUuid: string;
  config: TextFieldConfig;
  fieldName: string;
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
    <fieldset className="grid gap-6 rounded-lg border p-4">
      <legend className="-ml-1 px-1 text-sm font-medium">{config.label}</legend>
      <Textarea
        key={fieldName}
        name={fieldName}
        placeholder="Type text here"
        rows={5}
        value={config.content}
        onChange={onChange}
      />
    </fieldset>
  );
};
