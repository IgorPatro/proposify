import React, { type ChangeEvent } from "react";

import { Input } from "@/components/base/input";
import { useEditorStore } from "@/components/editor/store";

export const EditorSidebarTemplateSettings = () => {
  const updateTemplateName = useEditorStore((store) => store.updateName);
  const templateName = useEditorStore((store) => store.name);

  const handleTemplateNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateTemplateName(e.target.value);
  };

  return (
    <div className="flex flex-col gap-3">
      <Input
        value={templateName}
        onChange={handleTemplateNameChange}
        name="templateName"
        label="Name"
      />
    </div>
  );
};
