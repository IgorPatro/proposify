import React from "react";

import { TextInput } from "@/components/base/text-input";
import { useEditorStore } from "@/components/editor/template-editor/store";

export const EditorSidebarThemeSettings = () => {
  const updateThemeProperty = useEditorStore(
    (store) => store.updateThemeProperty,
  );
  const theme = useEditorStore((store) => store.theme);

  return (
    <div className="">
      <h3>Theme</h3>
      <div className="flex flex-col gap-3">
        <TextInput
          value={theme.bgPrimary}
          onChange={(value) => updateThemeProperty("bgPrimary", value)}
          name="theme.bgPrimary"
          label="Background primary color"
        />
        <TextInput
          value={theme.bgSecondary}
          onChange={(value) => updateThemeProperty("bgSecondary", value)}
          name="theme.bgSecondary"
          label="Background secondary color"
        />
        <TextInput
          value={theme.textPrimary}
          onChange={(value) => updateThemeProperty("textPrimary", value)}
          name="theme.textPrimary"
          label="Text primary color"
        />
        <TextInput
          value={theme.textSecondary}
          onChange={(value) => updateThemeProperty("textSecondary", value)}
          name="theme.textSecondary"
          label="Text secondary color"
        />
      </div>
    </div>
  );
};
