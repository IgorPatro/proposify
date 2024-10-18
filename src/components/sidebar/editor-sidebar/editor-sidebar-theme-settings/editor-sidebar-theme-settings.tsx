import React from "react";

import { Select } from "@/components/base/select";
import { useEditorStore } from "@/components/editor/store";
import { type ThemeEnum } from "@/server/api/resource/types";

export const EditorSidebarThemeSettings = () => {
  const updateTheme = useEditorStore((store) => store.updateTheme);
  const theme = useEditorStore((store) => store.theme);

  const onSelectTheme = (theme: string) => {
    updateTheme(theme as ThemeEnum);
  };

  return (
    <div className="flex flex-col gap-3">
      <Select
        label="Theme"
        name="theme"
        // TODO: Add options
        options={[
          { label: "Light", value: "light" },
          { label: "Dark", value: "dark" },
        ]}
        value={theme}
        onChange={onSelectTheme}
      />
    </div>
  );
};
