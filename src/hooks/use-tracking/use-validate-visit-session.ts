import { HOUR_QUARTER_IN_MS } from "@/constants/time";
import { VISIT_SESSION_UUID_STORAGE_KEY } from "@/constants/tracking";
import { api } from "@/utils/api";
import { getSessionStorageItem } from "@/utils/session-storage";

export const useValidateVisitSession = (offerUuid: string) => {
  return api.visitSession.validateVisitSession.useQuery(
    {
      offerUuid,
      visitSessionUuid: getSessionStorageItem(VISIT_SESSION_UUID_STORAGE_KEY),
    },
    {
      refetchInterval: HOUR_QUARTER_IN_MS,
    },
  );
};
