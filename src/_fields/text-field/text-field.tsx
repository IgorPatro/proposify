import { type CSSProperties } from "react";

import { type TextFieldConfig } from "./type";

interface TextFieldProps {
  config: TextFieldConfig;
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  className?: string;
  style?: CSSProperties;
}

export const TextField = ({ as, className, config, style }: TextFieldProps) => {
  const Component = as;

  return (
    <Component className={className} style={style}>
      {config.content}
    </Component>
  );
};
