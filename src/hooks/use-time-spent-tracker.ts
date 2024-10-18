import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";

import { type TrackingBody } from "@/pages/api/tracking";

export const useOfferTimeSpentTracker = (
  offerUuid: string,
  trackingEnabled = true,
) => {
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const [timeSpent, setTimeSpent] = useState<{ [key: string]: number }>({});
  const [visibleSectionUuid, setVisibleSectionUuid] = useState("");
  const { data: session, status } = useSession();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { isIntersecting, target } = entry;
          const sectionUuid = target.id;

          if (isIntersecting) {
            setVisibleSectionUuid(sectionUuid);
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
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (visibleSectionUuid) {
        setTimeSpent((prevTime) => ({
          ...prevTime,
          [visibleSectionUuid]: (prevTime[visibleSectionUuid] || 0) + 1,
        }));
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [visibleSectionUuid]);

  useEffect(() => {
    const handleSubmitTrackedTime = () => {
      if (!trackingEnabled) return;

      // NOTE: Add details about the device and location
      navigator.sendBeacon(
        "/api/tracking",
        JSON.stringify({
          guestUuid: status === "authenticated" ? session?.user?.id : null,
          offerUuid,
          tracking: timeSpent,
        } as TrackingBody),
      );
    };

    window.addEventListener("beforeunload", handleSubmitTrackedTime);

    return () => {
      window.removeEventListener("beforeunload", handleSubmitTrackedTime);
    };
  }, [timeSpent]);

  return { sectionRefs };
};
