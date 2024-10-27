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
import { OfferVisit } from "./offer-visit";

interface OfferDetailsTimeSpentProps {
  offerUuid: string;
}

export const OfferDetailsVisits = ({
  offerUuid,
}: OfferDetailsTimeSpentProps) => {
  const { data: visits, isLoading } = api.visit.getVisits.useQuery({
    offerUuid,
  });

  // Note: Reload the page to enable dark mode in the editor
  const onMoveToPreview = () => {
    window.open(getEditorOfferPreviewHref(offerUuid));
  };

  const renderContent = () => {
    if (!visits) {
      if (isLoading) {
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
        Łącznie wizyt: {visits.length}
        <div className="flex w-full flex-col gap-4">
          {visits.map((visit) => (
            <OfferVisit key={visit.id} visit={visit} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-2">
            <CardTitle>Wizyty</CardTitle>
            <CardDescription className="max-w-3/4">
              Dane kiedy Twoja oferta została wyświetlona
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
