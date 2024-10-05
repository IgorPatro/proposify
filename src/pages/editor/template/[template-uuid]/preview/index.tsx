import {
  type InferGetServerSidePropsType,
  type GetServerSideProps,
} from "next";
import React from "react";

import { Resource } from "@/components/resource";
import { getTemplatePreviewSsr } from "@/server/api/template/get-template-preview-ssr";
import { type Template } from "@/server/api/template/types";

export const getServerSideProps: GetServerSideProps<{
  template: Template;
}> = async (ctx) => {
  const templateUuid = ctx.query["template-uuid"] as string;

  const template = await getTemplatePreviewSsr(templateUuid);

  return {
    props: {
      template,
    },
  };
};

const EditorTemplatePagePreview = ({
  template,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <Resource resource={template} />;
};

export default EditorTemplatePagePreview;
