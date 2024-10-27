import React, { useMemo } from "react";

import { EditorDraggableBlock } from "./editor-draggable-block";
import { BLOCKS_MAP_BY_TYPE } from "./constants";
import { BlockTypeEnum } from "./type";
import { getBlockTypeLabel } from "./utils";

export const EditorSidebarBlocks = () => {
  return (
    <div className="flex flex-col gap-4">
      {BlockTypeEnum._def.values.map((group) => {
        return (
          <div key={group}>
            <h3 className="mb-2">{getBlockTypeLabel(group)}</h3>
            <div className="grid grid-cols-2 gap-3">
              {BLOCKS_MAP_BY_TYPE[group].map((blockName) => {
                return (
                  <EditorDraggableBlock blockName={blockName} key={blockName} />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
