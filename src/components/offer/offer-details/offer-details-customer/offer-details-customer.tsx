import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const OfferDetailsCustomer = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-2">
            <CardTitle>Dane twojego klienta</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>Content here</CardContent>
    </Card>
  );
};
