import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { type ResourceEnum } from "@/server/api/resource/types";
import { getBlockPreviewHref } from "@/utils/hrefs/editor";

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
      {/* Note: Before loading iframe, show placeholder */}
      <Image
        fill
        alt="Block placeholder"
        className="bg-black/40 object-cover"
        src="/image-placeholder.svg"
      />
      <iframe
        // Note: calculate the aspect ratio of the block and scale it down
        className="pointer-events-none absolute left-0 top-0 aspect-video h-block origin-top-left scale-[calc(208/1216)]"
        src={getBlockPreviewHref(blockUuid, resourceUuid, type)}
      />
    </div>
  );
};
