import React from "react";

import { Editor } from "@/components/editor";
import { EditorNavigation } from "@/components/navigation/editor-navigation";
import { EditorLayout } from "@/layouts/editor-layout";

interface EditorTemplatePageProps {
  params: {
    "template-uuid": string;
  };
}

const EditorTemplatePage = async ({ params }: EditorTemplatePageProps) => {
  const { "template-uuid": templateUuid } = params;
  // const template = await getEditorTemplateSsr(templateUuid);

  return (
    <>
      <EditorNavigation />
      <div className="flex w-full bg-zinc-500">
        <Editor resource={template} resourceUuid={templateUuid} />
      </div>
    </>
  );
};

EditorTemplatePage.getLayout = EditorLayout;

export default EditorTemplatePage;
