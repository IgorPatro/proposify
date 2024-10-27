import React from "react";

import { OfferDetailsCustomer } from "./offer-details-customer";
import { OfferDetailsHistory } from "./offer-details-history";

import { OfferDetailsVisits } from "./offer-details-visits/offer-details-visits";
import { OfferDetailsPreview } from "./offer-details-preview";

interface OfferDetailsProps {
  offerUuid: string;
}

export const OfferDetails = ({ offerUuid }: OfferDetailsProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2 flex flex-col gap-4">
        <OfferDetailsVisits offerUuid={offerUuid} />
        <OfferDetailsHistory />
        <OfferDetailsCustomer />
      </div>
      <OfferDetailsPreview offerUuid={offerUuid} />
    </div>
  );
};
