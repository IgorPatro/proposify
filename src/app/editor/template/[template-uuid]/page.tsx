import React from "react";

import { Editor } from "@/components/editor";
import { getEditorTemplateSsr } from "@/server/api/template/get-editor-template-ssr";

interface EditorTemplatePageProps {
  params: {
    "template-uuid": string;
  };
}

const EditorTemplatePage = async ({ params }: EditorTemplatePageProps) => {
  const { "template-uuid": templateUuid } = params;
  const template = await getEditorTemplateSsr(templateUuid);

  return <Editor resource={template} resourceUuid={templateUuid} />;
};

export default EditorTemplatePage;
