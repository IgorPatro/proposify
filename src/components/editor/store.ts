import lodashSet from "lodash/set";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { type Background, type Block } from "@/_blocks/types";
import { getBlockDefaultBackground } from "@/_blocks/utils";
import { type Resource, type ThemeEnum } from "@/server/api/resource/types";

export type EditorState = {
  background: Background;
  blocks: Block[];
  logoUrl: string | null | undefined;
  name: string;
  theme: ThemeEnum;
};

type EditorStoreActions = {
  removeBlock: (blockUuid: string) => void;
  updateBlockBackground: (blockUuid: string, background: Background) => void;
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
  background: getBlockDefaultBackground(),
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
    updateBlockBackground: (blockUuid, background) =>
      set((state) => {
        const block = state.blocks.find((b) => b.uuid === blockUuid);

        if (!block) return;
        block.background = background;
      }),
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
