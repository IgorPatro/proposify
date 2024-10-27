import {
  type InferGetServerSidePropsType,
  type GetServerSideProps,
} from "next";
import React from "react";

import { Editor } from "@/components/editor";
import { useEditorStore } from "@/components/editor/store";
import { EditorNavigation } from "@/components/navigation/editor-navigation";
import { toast } from "@/hooks/use-toast";
import { EditorLayout } from "@/layouts/editor-layout";
import { api } from "@/utils/api";
import { getDashboardTemplatesHref } from "@/utils/hrefs/dashboard";

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
  const { data: template, isLoading: isLoadingTemplate } =
    api.template.getOne.useQuery({
      templateUuid,
    });
  const { isPending: isPendingSaveTemplate, mutateAsync: saveTemplate } =
    api.template.save.useMutation();
  const blocks = useEditorStore((store) => store.blocks);
  const theme = useEditorStore((store) => store.theme);
  const name = useEditorStore((store) => store.name);
  const logoUrl = useEditorStore((store) => store.logoUrl);

  const onSaveTemplate = async () => {
    try {
      await saveTemplate({ blocks, logoUrl, name, templateUuid, theme });
      toast({
        title: "Zapisano szablon",
      });
    } catch (error) {
      toast({
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  };

  // Note: Trigger a reload to turn on/off dark mode
  const onGoBack = () => {
    window.location.href = getDashboardTemplatesHref();
  };

  return (
    <>
      <EditorNavigation
        isLoading={isPendingSaveTemplate || isLoadingTemplate}
        resourceName={template?.name}
        resourceUuid={templateUuid}
        onGoBack={onGoBack}
        onSave={onSaveTemplate}
      />
      <div className="flex w-full bg-zinc-500">
        <Editor isLoading={isLoadingTemplate} resource={template} />
      </div>
    </>
  );
};

EditorTemplatePage.getLayout = EditorLayout;

export default EditorTemplatePage;
