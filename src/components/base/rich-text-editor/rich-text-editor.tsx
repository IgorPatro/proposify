import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  type MDXEditorProps,
  toolbarPlugin,
  BoldItalicUnderlineToggles,
  ListsToggle,
} from "@mdxeditor/editor";

export const RichTextEditor = ({ onChange, markdown }: MDXEditorProps) => {
  return (
    <MDXEditor
      className="prose w-full rounded-md border border-input bg-background p-1 text-sm disabled:cursor-not-allowed disabled:opacity-50"
      onChange={onChange}
      markdown={markdown}
      contentEditableClassName="p-4"
      plugins={[
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <BoldItalicUnderlineToggles />
              <ListsToggle />
            </>
          ),
        }),
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
      ]}
    />
  );
};
