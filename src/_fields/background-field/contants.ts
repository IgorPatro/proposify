import { BackgroundTypeEnum } from "@/_blocks/types";

export const BACKGROUND_TYPE_OPTIONS = [
  { label: "Tło domyślne", value: BackgroundTypeEnum.Values.initial },
  { label: "Kolor", value: BackgroundTypeEnum.Values.color },
  { label: "Zdjęcie", value: BackgroundTypeEnum.Values.image },
  //   { label: "Gradient", value: BackgroundTypeEnum.Values.gradient },
  //   { label: "Video", value: BackgroundTypeEnum.Values.video },
];
