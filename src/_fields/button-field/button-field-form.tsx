import React, { type ChangeEvent } from "react";

import { Switch } from "@/components/base/switch";
import { Textarea } from "@/components/base/textarea";

import { type ButtonFieldConfig } from "./type";
import { isButtonActionDownload, isButtonActionLink } from "./utils";
import { Select } from "@/components/base/select";
import { BUTTON_ACTION_OPTIONS } from "./constants";
import { Input } from "@/components/base/input";

interface ButtonFieldFormProps {
  blockUuid: string;
  config: ButtonFieldConfig;
  fieldName: string;
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
  const onChange = (
    field: string,
    event: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>,
  ) => {
    updateBlockProperty(blockUuid, field, event.target.value);
  };

  const renderActionForm = () => {
    switch (true) {
      case isButtonActionLink(config.action):
        return (
          <div className="flex flex-col gap-4">
            <Input
              key="link"
              label="Link URL"
              name="link"
              placeholder="Type link here"
              value={config.action.href}
              onChange={(event) => onChange(`${fieldName}.action.href`, event)}
            />
            <Switch
              checked={config.action.newTab}
              label="Otwórz w nowej karcie"
              name="newTab"
              onCheckedChange={(isChecked) =>
                updateBlockProperty(
                  blockUuid,
                  `${fieldName}.action.newTab`,
                  isChecked,
                )
              }
            />
          </div>
        );
      case isButtonActionDownload(config.action):
        // TODO: Add variables, like: PDF_URL etc
        return (
          <Input
            key="download"
            label="Download URL"
            name="download"
            placeholder="Type download link here"
            value={config.action.downloadUrl}
            onChange={(event) =>
              onChange(`${fieldName}.action.downloadUrl`, event)
            }
          />
        );
    }
  };

  return (
    <fieldset className="grid gap-6 rounded-lg border p-4">
      <legend className="-ml-1 px-1 text-sm font-medium">{config.label}</legend>
      <Input
        key={fieldName}
        name={fieldName}
        placeholder="Type text here"
        value={config.content}
        onChange={(event) => onChange(`${fieldName}.content`, event)}
      />
      <Select
        options={BUTTON_ACTION_OPTIONS}
        name="action"
        value={config.action.type}
        onChange={(action) =>
          updateBlockProperty(blockUuid, `${fieldName}.action.type`, action)
        }
      />
      {renderActionForm()}
    </fieldset>
  );
};
