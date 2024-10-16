import { useEffect, useRef, useState } from "react";

export const useTimeSpentTracker = () => {
  const [visibilityTimes, setVisibilityTimes] = useState<{
    [key: string]: number;
  }>({});
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const visibilityTimers = useRef<{ [key: string]: number }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { target, isIntersecting } = entry;
          const sectionId = target.id;

          if (isIntersecting) {
            // Start timer
            visibilityTimers.current[sectionId] = Date.now();
          } else {
            // Stop timer and calculate time
            const endTime = Date.now();
            const startTime = visibilityTimers.current[sectionId];

            if (startTime) {
              const timeSpent = endTime - startTime;

              setVisibilityTimes((prevTimes) => ({
                ...prevTimes,
                [sectionId]: (prevTimes[sectionId] || 0) + timeSpent,
              }));
            }
          }
        });
      },
      { threshold: 0.5 }, // Only track when 50% of the section is visible
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

  // Log visibilityTimes whenever it changes
  useEffect(() => {
    console.log(visibilityTimes);
  }, [visibilityTimes]); // Correctly track state changes

  // Logging on unload or at intervals
  useEffect(() => {
    const handleUnload = () => {
      navigator.sendBeacon("/api/track-time", JSON.stringify(visibilityTimes));
    };

    // const interval = setInterval(() => {
    //   handleUnload();
    // }, 1000);

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
      //   clearInterval(interval);
    };
  }, [visibilityTimes]); // Track visibilityTimes as dependency

  return { sectionRefs };
};
