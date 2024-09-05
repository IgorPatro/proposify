import React from "react";

import { TextInput } from "@/components/base/text-input";

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
  return (
    <div>
      <span>{fieldName}</span>
      <TextInput
        key={fieldName}
        name={fieldName}
        placeholder="Type text here"
        value={config.content}
        onChange={(value) =>
          updateBlockProperty(blockUuid, `${fieldName}.content`, value)
        }
      />
    </div>
  );
};
