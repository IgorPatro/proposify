import { BlockName, BlockNameEnum } from "@/_blocks/types";
import { BlockType, BlockTypeEnum } from "./type";

export const BLOCKS_MAP_BY_TYPE: { [T in BlockType]: BlockName[] } = {
  [BlockTypeEnum.Values.hero]: BlockNameEnum._def.values.filter((blockName) => {
    return blockName.includes(BlockTypeEnum.Values.hero);
  }),
  [BlockTypeEnum.Values.footer]: BlockNameEnum._def.values.filter(
    (blockName) => {
      return blockName.includes(BlockTypeEnum.Values.footer);
    },
  ),
  [BlockTypeEnum.Values.about]: BlockNameEnum._def.values.filter(
    (blockName) => {
      return blockName.includes(BlockTypeEnum.Values.about);
    },
  ),
};
