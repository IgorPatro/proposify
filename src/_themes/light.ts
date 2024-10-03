import { type ThemeSchema } from "./type";

export const LIGHT_THEME: ThemeSchema = {
  accent: "orange-500",
  background: "gray-50",
  button: {
    primary: {
      background: "orange-400",
      border: "orange-400",
      color: "gray-900",
      hover: "orange-500",
    },
    secondary: {
      background: "gray-200",
      border: "gray-300",
      color: "gray-700",
      hover: "gray-300",
    },
  },
  error: "red-500",
  text: {
    primary: "gray-700",
    secondary: "gray-500",
  },
};
