import { type ThemeSchema } from "./type";

export const DARK_THEME: ThemeSchema = {
  accent: "orange-500",
  background: "gray-900",
  button: {
    primary: {
      background: "gray-800",
      border: "transparent",
      color: "white",
      hover: "gray-700",
    },
    secondary: {
      background: "gray-300",
      border: "gray-800",
      color: "black",
      hover: "gray-200",
    },
  },
  error: "red-400",
  text: {
    primary: "gray-200",
    secondary: "gray-400",
  },
};
