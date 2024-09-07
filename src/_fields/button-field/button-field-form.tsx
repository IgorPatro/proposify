import React, { type ChangeEvent } from "react";

import { Select } from "@/components/base/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

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
  const onChangeInput = (
    field: string,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    updateBlockProperty(blockUuid, field, event.target.value);
  };

  const renderActionForm = () => {
    switch (true) {
      case isButtonActionLink(config.action):
        return (
          <>
            <Input
              key="link"
              name="link"
              label="Link URL"
              placeholder="Type link here"
              value={config.action.href}
              onChange={(event) =>
                onChangeInput(`${fieldName}.action.href`, event)
              }
            />
            <Checkbox
              label="Open in new tab"
              checked={config.action.newTab}
              onCheckedChange={(isChecked) =>
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
          <Input
            key="download"
            name="download"
            label="Download URL"
            placeholder="Type download link here"
            value={config.action.downloadUrl}
            onChange={(event) =>
              onChangeInput(`${fieldName}.action.downloadUrl`, event)
            }
          />
        );
    }
  };

  return (
    <div>
      <Input
        key={fieldName}
        name={fieldName}
        label={fieldName}
        placeholder="Type text here"
        value={config.content}
        onChange={(event) => onChangeInput(`${fieldName}.content`, event)}
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
