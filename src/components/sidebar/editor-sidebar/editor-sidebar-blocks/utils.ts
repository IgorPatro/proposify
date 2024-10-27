import { BlockType } from "./type";

export const getBlockTypeLabel = (type: BlockType) => {
  switch (type) {
    case "hero":
      return "Hero";
    case "footer":
      return "Footer";
    case "about":
      return "About";
    default:
      return "";
  }
};
