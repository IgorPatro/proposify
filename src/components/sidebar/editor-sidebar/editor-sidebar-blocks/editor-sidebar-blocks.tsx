import React from "react";

import { BlockNameEnum } from "@/_blocks/types";

import { EditorDraggableBlock } from "./editor-draggable-block";

export const EditorSidebarBlocks = () => {
  return (
    <div className="flex flex-col gap-3">
      {BlockNameEnum._def.values.map((blockName) => {
        return <EditorDraggableBlock key={blockName} blockName={blockName} />;
      })}
    </div>
  );
};
