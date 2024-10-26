import Markdown from "markdown-to-jsx";
import { getHeadingClassNames } from "./utils";
import { twMerge } from "tailwind-merge";

interface HeadingProps {
  children: string;
  className?: string;
  size?: "small" | "medium" | "large";
}

export const Heading = ({
  children,
  className,
  size = "medium",
}: HeadingProps) => {
  return (
    <span className={twMerge(getHeadingClassNames(size), className)}>
      <Markdown>{children}</Markdown>
    </span>
  );
};
