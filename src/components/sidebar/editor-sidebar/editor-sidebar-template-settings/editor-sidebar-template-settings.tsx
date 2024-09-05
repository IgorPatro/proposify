import React from "react";

import { TextInput } from "@/components/base/text-input";
import { useEditorStore } from "@/components/editor/template-editor/store";

export const EditorSidebarTemplateSettings = () => {
  const updateTemplateName = useEditorStore((store) => store.updateName);
  const templateName = useEditorStore((store) => store.name);

  return (
    <div className="">
      <h3>Template</h3>
      <div className="flex flex-col gap-3">
        <TextInput
          value={templateName}
          onChange={(value) => updateTemplateName(value)}
          name="templateName"
          label="Template Name"
        />
      </div>
    </div>
  );
};
