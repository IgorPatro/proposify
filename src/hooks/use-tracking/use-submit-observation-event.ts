import { type ObservationEventBody } from "@/pages/api/tracking/submit-observation-event";

export const SUBMIT_OBSERVATION_EVENT_URL =
  "/api/tracking/submit-observation-event";

export const useSubmitObservationEvent = () => {
  const submitObservationEvent = (body: ObservationEventBody) =>
    navigator.sendBeacon(SUBMIT_OBSERVATION_EVENT_URL, JSON.stringify(body));

  return {
    submitObservationEvent,
  };
};
