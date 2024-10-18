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

interface OfferDetailsTimeSpentProps {
  offerUuid: string;
}

export const OfferDetailsTimeSpent = ({
  offerUuid,
}: OfferDetailsTimeSpentProps) => {
  const { data: offer, isLoading } = api.offer.getOne.useQuery({
    offerUuid,
  });
  const { data: timeReport, isLoading: isTimeReportLoading } =
    api.offer.getTimeReport.useQuery({
      offerUuid,
    });

  // Note: Reload the page to enable dark mode in the editor
  const onMoveToPreview = () => {
    window.open(getEditorOfferPreviewHref(offerUuid));
  };

  const renderContent = () => {
    if (!offer || !timeReport) {
      if (isLoading || isTimeReportLoading) {
        return (
          <div className="flex h-60 items-center justify-center">
            <HashLoader />
          </div>
        );
      }

      return "Brak danych";
    }

    return (
      <div className="flex w-full flex-col gap-4">
        Łączny czas przeglądania oferty: {timeReport.total} seconds
        <div className="flex w-full flex-col gap-4">
          {offer.blocks.map((block) => {
            return (
              <div className="flex items-center gap-6" key={block.uuid}>
                <div className="w-52 overflow-hidden rounded-md">
                  <BlockDynamicThumbnail
                    blockUuid={block.uuid}
                    resourceUuid={offerUuid}
                    type="offer"
                  />
                </div>
                <div className="text-center">
                  {timeReport.blocks[block.uuid]} seconds
                </div>
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
            <CardTitle>Czas przeglądania oferty</CardTitle>
            <CardDescription className="max-w-3/4">
              Dokładne informacje na temat czasu, który klient spędził na każdej
              stronie oferty.
            </CardDescription>
          </div>
          <Button className="w-fit" onClick={onMoveToPreview}>
            <HiEye className="mr-2 size-5" />
            Preview
          </Button>
        </div>
      </CardHeader>
      <CardContent>{renderContent()}</CardContent>
    </Card>
  );
};
