import lodashSet from "lodash/set";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { type Block } from "@/_blocks/types";
import { type Resource, type ThemeEnum } from "@/server/api/resource/types";

export type EditorState = {
  blocks: Block[];
  logoUrl: string | null | undefined;
  name: string;
  theme: ThemeEnum;
};

type EditorStoreActions = {
  removeBlock: (blockUuid: string) => void;
  updateBlockProperty: (
    blockUuid: string,
    path: string,
    value: string | boolean,
  ) => void;
  updateBlocks: (blocks: Block[]) => void;
  updateEditorState: (resource: Resource) => void;
  updateLogoUrl: (url: string) => void;
  updateName: (name: string) => void;
  updateTheme: (newTheme: ThemeEnum) => void;
};

type EditorStore = EditorState & EditorStoreActions;

const initialState: EditorState = {
  blocks: [],
  logoUrl: "",
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
    updateEditorState: (resource) =>
      set((state) => {
        state.blocks = resource.blocks;
        state.name = resource.name;
        state.theme = resource.theme;
        state.logoUrl = resource.logoUrl;
      }),
    updateLogoUrl: (url) =>
      set((state) => {
        state.logoUrl = url;
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
