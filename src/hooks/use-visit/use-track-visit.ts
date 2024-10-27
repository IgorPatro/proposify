import { CREATE_VISIT_API_URL } from "@/constants/tracking";
import { env } from "@/env";
import { useEffect } from "react";
import { UAParser } from "ua-parser-js";

interface Geolocation {
  IPv4: string;
  city: string;
  country_code: string;
  country_name: string;
  latitude: number;
  longitude: number;
  postal: string;
  state: string;
}

export const useTrackVisit = (offerUuid: string) => {
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://geolocation-db.com/json/${env.NEXT_PUBLIC_GEOLOCATION_DB_TOKEN}`,
      );
      const data = (await response.json()) as Geolocation;

      if (!data) return;

      const userAgent = new UAParser().getResult();

      const body = {
        device: userAgent.device.type ?? "desktop",
        browser: userAgent.browser.name,
        os: userAgent.os.name,
        ip: data.IPv4,
        city: data.city,
        country: data.country_code,
        latitude: data.latitude,
        longitude: data.longitude,
        postal: data.postal,
        state: data.state,
        offerUuid,
      };

      navigator.sendBeacon(CREATE_VISIT_API_URL, JSON.stringify(body));
    })();
  }, []);
};
