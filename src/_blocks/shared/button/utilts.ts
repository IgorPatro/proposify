import { ThemeSchema } from "@/_themes/type";

export const getButtonClassNames = (
  variant: "primary" | "secondary",
  theme: ThemeSchema,
) => {
  return `bg-${theme.button[variant].background} border-${theme.button[variant].border} text-${theme.button[variant].color} hover:bg-${theme.button[variant].hover}`;
};
