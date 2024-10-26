import React from "react";
import { HexColorPicker } from "react-colorful";

interface ColorFormProps {
  color: string | null | undefined;
  onChangeColor: (color: string) => void;
}

export const ColorForm = ({ color, onChangeColor }: ColorFormProps) => {
  return <HexColorPicker color={color ?? "#000"} onChange={onChangeColor} />;
};
