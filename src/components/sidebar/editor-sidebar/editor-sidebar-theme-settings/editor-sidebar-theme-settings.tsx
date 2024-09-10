import React from "react";

import { Input } from "@/components/base/input";
import { useEditorStore } from "@/components/editor/template-editor/store";

export const EditorSidebarThemeSettings = () => {
  const updateThemeProperty = useEditorStore(
    (store) => store.updateThemeProperty,
  );
  const theme = useEditorStore((store) => store.theme);

  return (
    <div className="flex flex-col gap-3">
      <Input
        value={theme.bgPrimary}
        onChange={(event) =>
          updateThemeProperty("bgPrimary", event.target.value)
        }
        name="theme.bgPrimary"
        label="Background primary color"
      />
      <Input
        value={theme.bgSecondary}
        onChange={(event) =>
          updateThemeProperty("bgSecondary", event.target.value)
        }
        name="theme.bgSecondary"
        label="Background secondary color"
      />
      <Input
        value={theme.textPrimary}
        onChange={(event) =>
          updateThemeProperty("textPrimary", event.target.value)
        }
        name="theme.textPrimary"
        label="Text primary color"
      />
      <Input
        value={theme.textSecondary}
        onChange={(event) =>
          updateThemeProperty("textSecondary", event.target.value)
        }
        name="theme.textSecondary"
        label="Text secondary color"
      />
    </div>
  );
};
