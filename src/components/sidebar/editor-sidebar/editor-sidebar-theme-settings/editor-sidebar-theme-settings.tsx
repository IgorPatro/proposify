import React from "react";

import { Select } from "@/components/base/select";
import { useEditorStore } from "@/components/editor/store";
import { ThemeEnum } from "@/server/api/resource/types";

export const EditorSidebarThemeSettings = () => {
  const updateTheme = useEditorStore((store) => store.updateTheme);
  const theme = useEditorStore((store) => store.theme);

  const onSelectTheme = (theme: string) => {
    updateTheme(theme as ThemeEnum);
  };

  return (
    <div className="flex flex-col gap-3">
      <Select
        name="theme"
        label="Theme"
        value={theme}
        onChange={onSelectTheme}
        // TODO: Add const options
        options={[
          { label: "Light", value: "light" },
          { label: "Dark", value: "dark" },
        ]}
      />
    </div>
  );
};
