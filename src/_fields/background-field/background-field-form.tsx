import React from "react";

import { type BackgroundType, type Background } from "@/_blocks/types";
import { Select } from "@/components/base/select";

import { ColorForm } from "./color-form";
import { BACKGROUND_TYPE_OPTIONS } from "./contants";
import { ImageForm } from "./image-form";

interface BackgroundFieldFormProps {
  blockUuid: string;
  config: Background;
  updateBackground: (blockUuid: string, background: Background) => void;
}

export const BackgroundFieldForm = ({
  blockUuid,
  config,
  updateBackground,
}: BackgroundFieldFormProps) => {
  const onChangeBackgroundType = (type: string) => {
    updateBackground(blockUuid, { ...config, type: type as BackgroundType });
  };

  const onChangeColor = (color: string) => {
    updateBackground(blockUuid, { ...config, color });
  };

  const renderForm = () => {
    switch (config.type) {
      case "color":
        return <ColorForm color={config.color} onChangeColor={onChangeColor} />;
      case "image":
        return (
          <ImageForm
            blockUuid={blockUuid}
            config={config}
            updateBackground={updateBackground}
          />
        );
      default:
        return null;
    }
  };

  return (
    <fieldset className="grid gap-6 rounded-lg border p-4">
      <legend className="-ml-1 px-1 text-sm font-medium">Tło</legend>
      <div className="flex flex-col">
        <Select
          label="Typ"
          name="type"
          options={BACKGROUND_TYPE_OPTIONS}
          value={config.type}
          onChange={onChangeBackgroundType}
        />
        <div className="mt-4 flex justify-center">{renderForm()}</div>
      </div>
    </fieldset>
  );
};
