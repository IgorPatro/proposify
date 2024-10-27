import React, { type ChangeEvent } from "react";

import { type TextFieldConfig } from "./type";
import { RichTextEditor } from "@/components/base/rich-text-editor";

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
  const onChange = (markdown: string) => {
    updateBlockProperty(blockUuid, `${fieldName}.content`, markdown);
  };

  return (
    <fieldset className="grid gap-6 rounded-lg border p-4">
      <legend className="-ml-1 px-1 text-sm font-medium">{config.label}</legend>
      <RichTextEditor markdown={config.content} onChange={onChange} />
    </fieldset>
  );
};
