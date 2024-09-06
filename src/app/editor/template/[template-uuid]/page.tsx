import React from "react";

import { getTemplate } from "@/query/get-template";

interface EditorTemplatePageProps {
  params: {
    "template-uuid": string;
  };
}

const EditorTemplatePage = async ({ params }: EditorTemplatePageProps) => {
  const { "template-uuid": templateUuid } = params;

  const template = await getTemplate(templateUuid);

  console.log(template);

  return <div>Edit template - {templateUuid}</div>;
};

export default EditorTemplatePage;
