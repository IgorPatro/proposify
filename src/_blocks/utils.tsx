import { BLOCKS_FIELDS_MAP, BLOCKS_MAP } from "./blocks";
import { type BlockName } from "./types";

export const getBlockByName = (blockName: BlockName) => {
  return BLOCKS_MAP[blockName];
};

export const getBlockDefaultFieldsByName = (blockName: BlockName) => {
  return BLOCKS_FIELDS_MAP[blockName];
};
