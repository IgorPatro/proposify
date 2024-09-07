import React from "react";

import { Editor } from "@/components/editor/template-editor/editor";
import { getTemplate } from "@/query/get-template";

interface EditorTemplatePageProps {
  params: {
    "template-uuid": string;
  };
}

const EditorTemplatePage = async ({ params }: EditorTemplatePageProps) => {
  const { "template-uuid": templateUuid } = params;
  const template = await getTemplate(templateUuid);

  return <Editor template={template} templateUuid={templateUuid} />;
};

export default EditorTemplatePage;
