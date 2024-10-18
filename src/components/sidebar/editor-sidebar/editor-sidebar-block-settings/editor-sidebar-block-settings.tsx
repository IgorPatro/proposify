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
import { useSelectedBlockUuid } from "@/components/editor/atoms";
import { useEditorStore } from "@/components/editor/store";

interface EditorSidebarBlockSettingsProps {}

export const EditorSidebarBlockSettings =
  ({}: EditorSidebarBlockSettingsProps) => {
    const [selectedBlockUuid] = useSelectedBlockUuid();
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
          <LuMousePointerClick className="size-10" />
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
                  blockUuid={selectedBlockUuid}
                  config={fieldConfig}
                  fieldName={fieldName}
                  key={fieldName}
                  updateBlockProperty={updateBlockProperty}
                />
              );
            case isFieldConfigButton(fieldConfig):
              return (
                <ButtonFieldForm
                  blockUuid={selectedBlockUuid}
                  config={fieldConfig}
                  fieldName={fieldName}
                  key={fieldName}
                  updateBlockProperty={updateBlockProperty}
                />
              );
            case isFieldConfigImage(fieldConfig):
              return (
                <ImageFieldForm
                  blockUuid={selectedBlockUuid}
                  config={fieldConfig}
                  fieldName={fieldName}
                  key={fieldName}
                  updateBlockProperty={updateBlockProperty}
                />
              );
            default:
              return "This field is not yet supported";
          }
        })}
      </div>
    );
  };
