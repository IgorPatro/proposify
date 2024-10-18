import React from "react";

import { OfferDetailsCustomer } from "./offer-details-customer";
import { OfferDetailsHistory } from "./offer-details-history";
import { OfferDetailsTimeSpent } from "./offer-details-time-spent";

interface OfferDetailsProps {
  offerUuid: string;
}

export const OfferDetails = ({ offerUuid }: OfferDetailsProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <OfferDetailsTimeSpent offerUuid={offerUuid} />
      <div className="flex flex-col gap-4">
        <OfferDetailsHistory />
        <OfferDetailsCustomer />
      </div>
    </div>
  );
};
