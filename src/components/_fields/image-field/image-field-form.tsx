import React from "react";

import { TextInput } from "@/components/base/text-input";

import { type ImageFieldConfig } from "./type";

interface ImageFieldFormProps {
  blockUuid: string;
  fieldName: string;
  config: ImageFieldConfig;
  updateBlockProperty: (blockUuid: string, path: string, value: string) => void;
}

export const ImageFieldForm = ({
  blockUuid,
  config,
  fieldName,
  updateBlockProperty,
}: ImageFieldFormProps) => {
  return (
    <div>
      <span>{fieldName}</span>
      <TextInput
        key={fieldName}
        name={fieldName}
        placeholder="Image src"
        value={config.url}
        onChange={(value) =>
          updateBlockProperty(blockUuid, `${fieldName}.url`, value)
        }
      />
      <TextInput
        key={fieldName}
        name={fieldName}
        placeholder="Alt"
        value={config.alt}
        onChange={(value) =>
          updateBlockProperty(blockUuid, `${fieldName}.alt`, value)
        }
      />
    </div>
  );
};
