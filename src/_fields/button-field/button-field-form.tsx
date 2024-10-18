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
              label="Link URL"
              name="link"
              placeholder="Type link here"
              rows={2}
              value={config.action.href}
              onChange={(event) => onChange(`${fieldName}.action.href`, event)}
            />
            <Switch
              checked={config.action.newTab}
              label="Open in new tab"
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
          <Textarea
            key="download"
            label="Download URL"
            name="download"
            placeholder="Type download link here"
            rows={2}
            value={config.action.downloadUrl}
            onChange={(event) =>
              onChange(`${fieldName}.action.downloadUrl`, event)
            }
          />
        );
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Textarea
          key={fieldName}
          label={config.label}
          name={fieldName}
          placeholder="Type text here"
          rows={3}
          value={config.content}
          onChange={(event) => onChange(`${fieldName}.content`, event)}
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
