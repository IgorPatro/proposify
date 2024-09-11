import lodashSet from "lodash/set";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { type Block } from "@/_blocks/types";
import { type ThemeEnum, type Template } from "@/server/api/template/types";

export type EditorState = {
  blocks: Block[];
  name: string;
  theme: ThemeEnum;
};

type EditorStoreActions = {
  updateBlocks: (blocks: Block[]) => void;
  updateTheme: (newTheme: ThemeEnum) => void;
  updateEditorState: (template: Template) => void;
  updateBlockProperty: (
    blockUuid: string,
    path: string,
    value: string | boolean,
  ) => void;
  removeBlock: (blockUuid: string) => void;
  updateName: (name: string) => void;
};

type EditorStore = EditorState & EditorStoreActions;

const initialState: EditorState = {
  blocks: [],
  name: "",
  theme: "light",
};

export const useEditorStore = create<EditorStore>()(
  immer((set) => ({
    ...initialState,
    removeBlock: (blockUuid) => {
      set((state) => {
        state.blocks = state.blocks.filter((block) => block.uuid !== blockUuid);
      });
    },
    updateBlockProperty: (blockUuid, path, value) =>
      set((state) => {
        const block = state.blocks.find((b) => b.uuid === blockUuid);

        if (!block) return;
        lodashSet(block.fields, path, value);
      }),
    updateBlocks: (blocks) =>
      set((state) => {
        state.blocks = blocks;
      }),
    updateEditorState: (template) =>
      set((state) => {
        state.blocks = template.blocks;
        state.name = template.name;
        state.theme = template.theme;
      }),
    updateName: (name) =>
      set((state) => {
        state.name = name;
      }),
    updateTheme: (newTheme) =>
      set((state) => {
        state.theme = newTheme;
      }),
  })),
);
