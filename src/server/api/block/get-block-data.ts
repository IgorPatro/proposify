import { db } from "@/server/db";

import { ResourceSchema, type ResourceEnum } from "../resource/types";

export const getBlockDataSsr = async (
  blockUuid: string,
  resourceUuid: string,
  type: ResourceEnum,
) => {
  let resource;
  if (type === "offer") {
    resource = await db.offer.findUnique({
      where: { uuid: resourceUuid },
    });
  } else {
    resource = await db.template.findUnique({
      where: { uuid: resourceUuid },
    });
  }

  const parsedResource = ResourceSchema.safeParse(resource);

  if (parsedResource.success === false) {
    throw new Error("Resource not found");
  }

  const block = parsedResource.data.blocks.find(
    (block) => block.uuid === blockUuid,
  );

  if (!block) {
    throw new Error("Block not found");
  }

  return {
    block,
    logoUrl: parsedResource.data.logoUrl,
    name: parsedResource.data.name,
    theme: parsedResource.data.theme,
    uuid: parsedResource.data.uuid,
  };
};

export type BlockData = Awaited<ReturnType<typeof getBlockDataSsr>>;
