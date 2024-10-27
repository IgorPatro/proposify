import React from "react";
import { HiEye } from "react-icons/hi";
import { HashLoader } from "react-spinners";

import { BlockDynamicThumbnail } from "@/components/block-dynamic-thumbnail";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { api } from "@/utils/api";
import { getEditorOfferPreviewHref } from "@/utils/hrefs/editor";

interface OfferDetailsPreviewProps {
  offerUuid: string;
}

export const OfferDetailsPreview = ({
  offerUuid,
}: OfferDetailsPreviewProps) => {
  const { data: offer, isLoading } = api.offer.getOne.useQuery({
    offerUuid,
  });

  // Note: Reload the page to enable dark mode in the editor
  const onMoveToPreview = () => {
    window.open(getEditorOfferPreviewHref(offerUuid));
  };

  const renderContent = () => {
    if (!offer) {
      if (isLoading) {
        return (
          <div className="flex h-60 items-center justify-center">
            <HashLoader />
          </div>
        );
      }

      return "Błąd ładowania preview";
    }

    return (
      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {offer.blocks.map((block) => {
            return (
              <div className="w-52 overflow-hidden rounded-md">
                <BlockDynamicThumbnail
                  blockUuid={block.uuid}
                  resourceUuid={offerUuid}
                  type="offer"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-2">
            <CardTitle>Preview</CardTitle>
            <CardDescription className="max-w-3/4">
              Tak wygląda Twoja oferta
            </CardDescription>
          </div>
          {/* <Button className="w-fit" onClick={onMoveToPreview}>
            <HiEye className="mr-2 size-5" />
            Zobacz
          </Button> */}
        </div>
      </CardHeader>
      <CardContent>{renderContent()}</CardContent>
    </Card>
  );
};
