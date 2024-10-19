import { type ObservationEvent } from "@prisma/client";

export const getTimeSpentPerBlock = (observationEvents: ObservationEvent[]) => {
  return observationEvents.reduce(
    (acc, { blockUuid, timeSpent }) => {
      if (!acc[blockUuid]) {
        acc[blockUuid] = 0;
      } else {
        acc[blockUuid] += timeSpent;
      }

      return acc;
    },
    {} as Record<string, number>,
  );
};
