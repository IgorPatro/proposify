import { type ThemeSchema } from "./type";

export const DARK_THEME: ThemeSchema = {
  accent: "orange-500",
  background: "gray-900",
  button: {
    primary: {
      background: "orange-500",
      border: "orange-500",
      color: "white",
      hover: "orange-600",
    },
    secondary: {
      background: "gray-700",
      border: "gray-700",
      color: "gray-300",
      hover: "gray-600",
    },
  },
  error: "red-400",
  text: {
    primary: "gray-200",
    secondary: "gray-400",
  },
};
