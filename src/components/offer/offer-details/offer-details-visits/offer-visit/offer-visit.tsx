import {
  formatDateToDayFullMonthYear,
  formatDateToDayShortMonthYear,
} from "@/utils/date";
import { formatDateToTime } from "@/utils/time";
import { Visit } from "@prisma/client";
import React from "react";
import { HiDesktopComputer, HiDeviceMobile } from "react-icons/hi";

interface OfferVisitProps {
  visit: Visit;
}

export const OfferVisit = ({ visit }: OfferVisitProps) => {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <div className="rounded-full border p-1">
          {visit.device === "desktop" ? (
            <HiDesktopComputer className="h-6 w-6 text-gray-500" />
          ) : (
            <HiDeviceMobile className="h-6 w-6 text-gray-500" />
          )}
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <span>
            {visit.browser}, {visit.os}
          </span>

          <span>
            {visit.city}, {visit.country}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <span>{formatDateToDayShortMonthYear(visit.createdAt)}</span>
        <span className="text-end text-sm">
          {formatDateToTime(visit.createdAt)}
        </span>
      </div>
    </div>
  );
};
