import React, { type ChangeEvent } from "react";

import { Input } from "@/components/base/input";
import { useEditorStore } from "@/components/editor/store";

export const EditorSidebarResourceSettings = () => {
  const updateResourceName = useEditorStore((store) => store.updateName);
  const resourceName = useEditorStore((store) => store.name);

  const handleResourceNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateResourceName(e.target.value);
  };

  return (
    <div className="flex flex-col gap-3">
      TODO: Logo uploader
      <Input
        value={resourceName}
        onChange={handleResourceNameChange}
        name="resourceName"
        label="Name"
      />
    </div>
  );
};
