import Markdown from "markdown-to-jsx";

interface TextProps {
  children: string;
}

export const Text = ({ children }: TextProps) => {
  return (
    <span className="text-base font-normal">
      <Markdown>{children}</Markdown>
    </span>
  );
};
