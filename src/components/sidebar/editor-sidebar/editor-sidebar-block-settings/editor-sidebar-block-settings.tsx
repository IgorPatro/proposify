import React, { useMemo } from "react";

import { ButtonFieldForm } from "@/_fields/button-field";
import { ImageFieldForm } from "@/_fields/image-field";
import { TextFieldForm } from "@/_fields/text-field";
import {
  isFieldConfigButton,
  isFieldConfigImage,
  isFieldConfigText,
} from "@/_fields/utils";
import { useEditorStore } from "@/components/editor/template-editor/store";

interface EditorSidebarBlockSettingsProps {
  selectedBlockUuid: string;
}

export const EditorSidebarBlockSettings = ({
  selectedBlockUuid,
}: EditorSidebarBlockSettingsProps) => {
  const blocks = useEditorStore((store) => store.blocks);
  const updateBlockProperty = useEditorStore(
    (store) => store.updateBlockProperty,
  );

  const block = useMemo(() => {
    return blocks.find((block) => block.uuid === selectedBlockUuid);
  }, [selectedBlockUuid, blocks]);

  if (!block) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed border-gray-500">
        <span>Select block to start editing</span>
      </div>
    );
  }

  return (
    <div className="my-6 flex flex-col gap-3">
      {Object.keys(block.fields).map((fieldName) => {
        const fieldConfig = block.fields[fieldName];

        switch (true) {
          case isFieldConfigText(fieldConfig):
            return (
              <TextFieldForm
                key={fieldName}
                blockUuid={selectedBlockUuid}
                config={fieldConfig}
                fieldName={fieldName}
                updateBlockProperty={updateBlockProperty}
              />
            );
          case isFieldConfigButton(fieldConfig):
            return (
              <ButtonFieldForm
                key={fieldName}
                blockUuid={selectedBlockUuid}
                config={fieldConfig}
                fieldName={fieldName}
                updateBlockProperty={updateBlockProperty}
              />
            );
          case isFieldConfigImage(fieldConfig):
            return (
              <ImageFieldForm
                blockUuid={selectedBlockUuid}
                fieldName={fieldName}
                updateBlockProperty={updateBlockProperty}
                config={fieldConfig}
              />
            );
          default:
            return "This field is not yet supported";
        }
      })}
    </div>
  );
};
