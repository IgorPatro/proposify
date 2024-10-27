import Markdown from "markdown-to-jsx";

interface TextProps {
  children: string;
}

export const Text = ({ children }: TextProps) => {
  return (
    <div className="prose text-base font-normal">
      <Markdown>{children}</Markdown>
    </div>
  );
};
