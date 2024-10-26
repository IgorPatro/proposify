import React from "react";

import { getBlockByName } from "@/_blocks/utils";

import { EditorBlock } from "../editor-block";
import { EditorDroppableArea } from "../editor-droppable-area";
import { useEditorStore } from "../store";
import { type DraggedBlock } from "../types";

interface EditorBlocksRendererProps {
  draggedBlock: DraggedBlock | null;
}

export const EditorBlocksRenderer = ({
  draggedBlock,
}: EditorBlocksRendererProps) => {
  const blocks = useEditorStore((store) => store.blocks);
  const theme = useEditorStore((store) => store.theme);
  const logoUrl = useEditorStore((store) => store.logoUrl);

  return (
    <div className="flex h-screen max-h-screen min-h-screen w-full overflow-hidden px-80 pt-14">
      <div className="@container flex w-full justify-center overflow-y-scroll p-10 scrollbar-hide">
        <div className="flex w-full max-w-360 flex-col gap-4">
          {blocks.map((block) => {
            return (
              <EditorBlock
                blockName={block.name}
                blockUuid={block.uuid}
                key={block.uuid}
                renderBlock={getBlockByName(block.name)({
                  background: block.background,
                  fields: block.fields,
                  resource: {
                    logoUrl,
                  },
                  themeEnum: theme,
                })}
              />
            );
          })}
          <EditorDroppableArea draggedBlock={draggedBlock} />
          <div className="pb-4" />
        </div>
      </div>
    </div>
  );
};
