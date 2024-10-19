import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";

import { HOUR_QUARTER_IN_MS } from "@/contants/time";
import { api } from "@/utils/api";
import { getSessionStorageItem } from "@/utils/session-storage";

import { useSubmitObservationEvent } from "./use-submit-observation-event";

const VISIT_SESSION_UUID_STORAGE_KEY = "visitSessionUuid";

export const useOfferTimeSpentTracker = (
  offerUuid: string,
  trackingEnabled = true,
) => {
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const [visibleBlockUuid, setVisibleBlockUuid] = useState("");
  const visibleBlockObservationTimestamp = useRef(new Date());
  const { data: session } = useSession();
  const { submitObservationEvent } = useSubmitObservationEvent();
  const { data: visitSession } = api.visitSession.validateVisitSession.useQuery(
    {
      offerUuid,
      visitSessionUuid: getSessionStorageItem(VISIT_SESSION_UUID_STORAGE_KEY),
    },
    {
      refetchInterval: HOUR_QUARTER_IN_MS,
    },
  );

  const handleSubmitObservationEvent = (
    blockUuid: string,
    timeStamp: number,
  ) => {
    // Note: Skip tracking if tracking is disabled or the visit session UUID is missing
    if (!trackingEnabled || !visitSession) {
      return;
    }

    const timeSpent =
      timeStamp - visibleBlockObservationTimestamp.current.getTime();

    // Note: Skip tracking if the user spent less than 3 seconds in the block
    if (timeSpent < 3000) {
      return;
    }

    submitObservationEvent({
      blockUuid,
      guestUuid: session?.user?.uuid || null,
      offerUuid,
      timeSpent,
      visitSessionUuid: visitSession.uuid,
    });

    setVisibleBlockUuid(blockUuid);
    visibleBlockObservationTimestamp.current = new Date();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { isIntersecting, target } = entry;
          const blockUuid = target.id;

          if (isIntersecting && visibleBlockUuid !== blockUuid) {
            handleSubmitObservationEvent(blockUuid, new Date().getTime());
          }
        });
      },
      { threshold: 0.5 },
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Note: Submit observation event when user leaves the page
  useEffect(() => {
    const onBeforeUnloadSubmitObservationEvent = () => {
      if (!visibleBlockUuid) return;
      handleSubmitObservationEvent(visibleBlockUuid, new Date().getTime());
    };

    window.addEventListener(
      "beforeunload",
      onBeforeUnloadSubmitObservationEvent,
    );

    return () => {
      window.removeEventListener(
        "beforeunload",
        onBeforeUnloadSubmitObservationEvent,
      );
    };
  });

  return { sectionRefs };
};
