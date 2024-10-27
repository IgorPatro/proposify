import { BLOCKS_FIELDS_MAP, BLOCKS_ICONS_MAP, BLOCKS_MAP } from "./blocks";
import { type Background, type BlockName } from "./types";

export const getBlockDefaultBackground: () => Background = () => {
  return {
    alt: null,
    color: null,
    type: "initial",
    url: null,
  };
};

export const getBlockByName = (blockName: BlockName) => {
  return BLOCKS_MAP[blockName];
};

export const getBlockDefaultFieldsByName = (blockName: BlockName) => {
  return BLOCKS_FIELDS_MAP[blockName];
};

export const getBlockIcon = (blockName: BlockName) => {
  return BLOCKS_ICONS_MAP[blockName];
};
