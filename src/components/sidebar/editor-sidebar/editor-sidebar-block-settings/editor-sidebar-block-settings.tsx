import React, { useMemo } from "react";
import { LuMousePointerClick } from "react-icons/lu";

import { ButtonFieldForm } from "@/_fields/button-field";
import { ImageFieldForm } from "@/_fields/image-field";
import { TextFieldForm } from "@/_fields/text-field";
import {
  isFieldConfigButton,
  isFieldConfigImage,
  isFieldConfigText,
} from "@/_fields/utils";
import { useEditorStore } from "@/components/editor/store";

interface EditorSidebarBlockSettingsProps {
  selectedBlockUuid?: string;
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

  if (!block || !selectedBlockUuid) {
    return (
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-gray-500 p-4">
        <LuMousePointerClick className="h-10 w-10" />
        <span className="text-center">
          Wybierz blok, aby zacząć go edytować
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
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
                key={fieldName}
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
