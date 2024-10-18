import { useIsIFrameLoaded } from "@/hooks/use-is-iframe-loaded";
import { ResourceEnum } from "@/server/api/resource/types";
import { getBlockPreviewHref } from "@/utils/hrefs/editor";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

interface BlockDynamicThumbnailProps {
  blockUuid: string;
  resourceUuid: string;
  type: ResourceEnum;
}

export const BlockDynamicThumbnail = ({
  blockUuid,
  resourceUuid,
  type,
}: BlockDynamicThumbnailProps) => {
  return (
    <div className="relative aspect-video w-52">
      <Image
        alt="Block placeholder"
        src="/images/placeholder.png"
        fill
        className="object-cover"
      />
      <iframe
        // Note: calculate the aspect ratio of the block and scale it down
        className="h-block pointer-events-none absolute left-0 top-0 aspect-video origin-top-left scale-[calc(208/1216)]"
        src={getBlockPreviewHref(blockUuid, resourceUuid, type)}
      />
    </div>
  );
};
