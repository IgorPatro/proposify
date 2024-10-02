import React from "react";

import { getBlockByName } from "@/_blocks/utils";

import { EditorBlock } from "../editor-block";
import { EditorDroppableArea } from "../editor-droppable-area";
import { useEditorStore } from "../store";
import { type DraggedBlock } from "../types";

interface EditorBlocksRendererProps {
  onSelectBlock: (blockUuid: string) => void;
  selectedBlockUuid: string;
  draggedBlock: DraggedBlock | null;
}

export const EditorBlocksRenderer = ({
  draggedBlock,
  onSelectBlock,
  selectedBlockUuid,
}: EditorBlocksRendererProps) => {
  const blocks = useEditorStore((store) => store.blocks);
  const theme = useEditorStore((store) => store.theme);

  return (
    <div className="flex h-screen max-h-screen min-h-screen w-full overflow-hidden pl-80 pt-14">
      <div className="flex w-full justify-center overflow-y-scroll p-10">
        <div className="flex w-full max-w-360 flex-col gap-4">
          {blocks.map((block) => {
            return (
              <EditorBlock
                blockUuid={block.uuid}
                onSelectBlock={onSelectBlock}
                isSelected={selectedBlockUuid === block.uuid}
                key={block.uuid}
                renderBlock={getBlockByName(block.name)({
                  fields: block.fields,
                  themeEnum: theme,
                })}
              />
            );
          })}
          <EditorDroppableArea draggedBlock={draggedBlock} />
        </div>
      </div>
    </div>
  );
};
