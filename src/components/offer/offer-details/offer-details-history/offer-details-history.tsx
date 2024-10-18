import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const OfferDetailsHistory = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-2">
            <CardTitle>Historia oferty</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>Content here</CardContent>
    </Card>
  );
};
