import { type Visit } from "../visit/types";

export const generateTimeReportFromVisits = (visits: Visit[]) => {
  return visits.reduce(
    (acc, visit) => {
      Object.entries(visit.tracking).forEach(([key, value]) => {
        if (!acc[key]) {
          acc[key] = 0;
        }

        acc[key] += value;
      });

      return acc;
    },
    {} as Record<string, number>,
  );
};
