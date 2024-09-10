import React from "react";

import { Input } from "@/components/base/input";

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
    <div className="flex flex-col gap-4">
      <Input
        key={fieldName}
        name={fieldName}
        placeholder="Image src"
        value={config.url}
        onChange={(event) =>
          updateBlockProperty(blockUuid, `${fieldName}.url`, event.target.value)
        }
      />
      <Input
        key={fieldName}
        name={fieldName}
        placeholder="Alt"
        value={config.alt}
        onChange={(event) =>
          updateBlockProperty(blockUuid, `${fieldName}.url`, event.target.value)
        }
      />
    </div>
  );
};
