import React from "react";

import { Checkbox } from "@/components/base/checkbox";
import { Select } from "@/components/base/select";
import { TextInput } from "@/components/base/text-input";

import { type ButtonFieldConfig } from "./type";
import { isButtonActionDownload, isButtonActionLink } from "./utils";

interface ButtonFieldFormProps {
  blockUuid: string;
  fieldName: string;
  config: ButtonFieldConfig;
  updateBlockProperty: (
    blockUuid: string,
    path: string,
    value: string | boolean,
  ) => void;
}

export const ButtonFieldForm = ({
  blockUuid,
  config,
  fieldName,
  updateBlockProperty,
}: ButtonFieldFormProps) => {
  const renderActionForm = () => {
    switch (true) {
      case isButtonActionLink(config.action):
        return (
          <>
            <TextInput
              key="link"
              name="link"
              placeholder="Type link here"
              value={config.action.href}
              onChange={(value) =>
                updateBlockProperty(
                  blockUuid,
                  `${fieldName}.action.href`,
                  value,
                )
              }
            />
            <Checkbox
              label="Open in new tab"
              checked={config.action.newTab}
              onChange={(isChecked) =>
                updateBlockProperty(
                  blockUuid,
                  `${fieldName}.action.newTab`,
                  isChecked,
                )
              }
              name="newTab"
            />
          </>
        );
      case isButtonActionDownload(config.action):
        // TODO: Add variables, like: PDF_URL etc
        return (
          <TextInput
            key="download"
            name="download"
            placeholder="Type download link here"
            value={config.action.downloadUrl}
            onChange={(value) =>
              updateBlockProperty(
                blockUuid,
                `${fieldName}.action.downloadUrl`,
                value,
              )
            }
          />
        );
    }
  };

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
      <Select
        name="action"
        onChange={(newType) =>
          updateBlockProperty(blockUuid, `${fieldName}.action.type`, newType)
        }
        value={config.action.type}
        options={[
          { label: "Link", value: "link" },
          { label: "Download", value: "download" },
        ]}
      />
      {renderActionForm()}
    </div>
  );
};
