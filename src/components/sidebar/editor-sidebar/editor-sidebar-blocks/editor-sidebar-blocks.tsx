import React from "react";

import { BlockNameEnum } from "@/_blocks/types";

import { EditorDraggableBlock } from "./editor-draggable-block";

export const EditorSidebarBlocks = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {BlockNameEnum._def.values.map((blockName) => {
        return <EditorDraggableBlock key={blockName} blockName={blockName} />;
      })}
    </div>
  );
};
