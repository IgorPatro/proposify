import React, { type ChangeEvent } from "react";

import { Switch } from "@/components/base/switch";
import { Textarea } from "@/components/base/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  const onChange = (field: string, event: ChangeEvent<HTMLTextAreaElement>) => {
    updateBlockProperty(blockUuid, field, event.target.value);
  };

  const renderActionForm = () => {
    switch (true) {
      case isButtonActionLink(config.action):
        return (
          <div className="flex flex-col gap-2">
            <Textarea
              key="link"
              name="link"
              label="Link URL"
              placeholder="Type link here"
              value={config.action.href}
              onChange={(event) => onChange(`${fieldName}.action.href`, event)}
              rows={2}
            />
            <Switch
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
          </div>
        );
      case isButtonActionDownload(config.action):
        // TODO: Add variables, like: PDF_URL etc
        return (
          <Textarea
            key="download"
            name="download"
            label="Download URL"
            placeholder="Type download link here"
            value={config.action.downloadUrl}
            onChange={(event) =>
              onChange(`${fieldName}.action.downloadUrl`, event)
            }
            rows={2}
          />
        );
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Textarea
          key={fieldName}
          name={fieldName}
          label={config.label}
          placeholder="Type text here"
          value={config.content}
          onChange={(event) => onChange(`${fieldName}.content`, event)}
          rows={3}
        />
        <Select
          name="action"
          value={config.action.type}
          onValueChange={(newType) =>
            updateBlockProperty(blockUuid, `${fieldName}.action.type`, newType)
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="link">Link</SelectItem>
            <SelectItem value="download">Download</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {renderActionForm()}
    </div>
  );
};
