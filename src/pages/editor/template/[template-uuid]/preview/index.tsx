import React from "react";

import { Resource } from "@/components/resource";

import { getEditorTemplateSsr } from "@/server/api/template/get-editor-template-ssr";

interface EditorTemplatePagePreviewProps {
  params: {
    "template-uuid": string;
  };
}

const EditorTemplatePagePreview = async ({
  params,
}: EditorTemplatePagePreviewProps) => {
  const { "template-uuid": templateUuid } = params;
  const template = await getEditorTemplateSsr(templateUuid);

  return <Resource resource={template} />;
};

export default EditorTemplatePagePreview;
