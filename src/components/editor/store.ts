import lodashSet from "lodash/set";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { type Block } from "@/_blocks/types";
import { Resource, ThemeEnum } from "@/server/api/resource/types";

export type EditorState = {
  blocks: Block[];
  name: string;
  theme: ThemeEnum;
  logoUrl: string;
};

type EditorStoreActions = {
  updateBlocks: (blocks: Block[]) => void;
  updateTheme: (newTheme: ThemeEnum) => void;
  updateEditorState: (resource: Resource) => void;
  updateBlockProperty: (
    blockUuid: string,
    path: string,
    value: string | boolean,
  ) => void;
  removeBlock: (blockUuid: string) => void;
  updateName: (name: string) => void;
  updateLogoUrl: (url: string) => void;
};

type EditorStore = EditorState & EditorStoreActions;

const initialState: EditorState = {
  blocks: [],
  name: "",
  theme: "light",
  logoUrl: "",
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
    updateEditorState: (resource) =>
      set((state) => {
        state.blocks = resource.blocks;
        state.name = resource.name;
        state.theme = resource.theme;
      }),
    updateName: (name) =>
      set((state) => {
        state.name = name;
      }),
    updateTheme: (newTheme) =>
      set((state) => {
        state.theme = newTheme;
      }),
    updateLogoUrl: (url) =>
      set((state) => {
        state.logoUrl = url;
      }),
  })),
);
