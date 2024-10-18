import {
  type InferGetServerSidePropsType,
  type GetServerSideProps,
} from "next";
import React from "react";

import { getBlockByName } from "@/_blocks/utils";
import { EditorLayout } from "@/layouts/editor-layout";
import { type BlockData, getBlockDataSsr } from "@/server/api/block/get-block-data";
import { type ResourceEnum } from "@/server/api/resource/types";

export const getServerSideProps: GetServerSideProps<{
  data: BlockData;
}> = async (ctx) => {
  const resourceUuid = ctx.query["resourceUuid"] as string;
  const type = ctx.query["type"] as ResourceEnum;
  const blockUuid = ctx.query["block-uuid"] as string;

  if (!resourceUuid || !type || !blockUuid) {
    return {
      notFound: true,
    };
  }

  const data = await getBlockDataSsr(blockUuid, resourceUuid, type);

  return {
    props: {
      data,
    },
  };
};

const BlockPreviewPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="h-block w-[1216px]">
      {getBlockByName(data.block.name)({
        fields: data.block.fields,
        resource: {
          logoUrl: data.logoUrl,
        },
        themeEnum: data.theme,
      })}
    </div>
  );
};

BlockPreviewPage.getLayout = EditorLayout;

export default BlockPreviewPage;
