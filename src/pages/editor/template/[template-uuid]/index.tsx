import {
  type InferGetServerSidePropsType,
  type GetServerSideProps,
} from "next";
import React from "react";

import { Editor } from "@/components/editor";
import { EditorNavigation } from "@/components/navigation/editor-navigation";
import { EditorLayout } from "@/layouts/editor-layout";
import { api } from "@/utils/api";

export const getServerSideProps: GetServerSideProps<{
  templateUuid: string;
}> = async (ctx) => {
  const templateUuid = ctx.query["template-uuid"] as string;

  return {
    props: {
      templateUuid,
    },
  };
};

const EditorTemplatePage = ({
  templateUuid,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data: template } = api.template.getOne.useQuery({ templateUuid });

  return (
    <>
      <EditorNavigation />
      <div className="flex w-full bg-zinc-500">
        {template ? (
          <Editor resource={template} resourceUuid={templateUuid} />
        ) : null}
      </div>
    </>
  );
};

EditorTemplatePage.getLayout = EditorLayout;

export default EditorTemplatePage;
