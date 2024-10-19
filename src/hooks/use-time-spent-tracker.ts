import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";

import { api } from "@/utils/api";
import { generateUuid } from "@/utils/uuid";

import { useSessionStorage } from "./use-session-storage";
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
  const [visitSessionUuid, setVisitSessionUuid] = useSessionStorage(
    VISIT_SESSION_UUID_STORAGE_KEY,
    "",
  );
  const { submitObservationEvent } = useSubmitObservationEvent();
  const { mutateAsync: validateVisitSession } =
    api.visitSession.validateVisitSession.useMutation({
      onError: () => {
        // Note: if the visit session is invalid -> generate a new session
        setVisitSessionUuid(generateUuid());
      },
    });

  const handleSubmitObservationEvent = (
    blockUuid: string,
    timeSpent: number,
  ) => {
    // Note: Skip tracking if tracking is disabled or the visit session UUID is missing
    if (!trackingEnabled || !visitSessionUuid) {
      return;
    }

    submitObservationEvent({
      blockUuid,
      guestUuid: session?.user?.uuid || null,
      offerUuid,
      timeSpent,
      visitSessionUuid,
    });
  };

  useEffect(() => {
    if (!visitSessionUuid) {
      setVisitSessionUuid(generateUuid());
      return;
    }

    validateVisitSession({ visitSessionUuid });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visitSessionUuid]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { isIntersecting, target } = entry;
          const blockUuid = target.id;

          if (isIntersecting && visibleBlockUuid !== blockUuid) {
            const timeSpent =
              new Date().getTime() -
              visibleBlockObservationTimestamp.current.getTime();

            // Note: Skip tracking if the user spent less than 3 seconds in the block
            if (timeSpent <= 3000) {
              return;
            }

            handleSubmitObservationEvent(blockUuid, timeSpent);
            setVisibleBlockUuid(blockUuid);
            visibleBlockObservationTimestamp.current = new Date();
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

  return { sectionRefs };
};
