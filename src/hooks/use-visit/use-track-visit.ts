import { CREATE_VISIT_API_URL } from "@/constants/tracking";
import { env } from "@/env";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { UAParser } from "ua-parser-js";
import { useFirstRender } from "../use-first-render";

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
  const isFirstRender = useFirstRender();
  const { data: session } = useSession();

  useEffect(() => {
    if (!isFirstRender) return;

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
        guestUuid: session?.user?.uuid || null,
      };

      navigator.sendBeacon(CREATE_VISIT_API_URL, JSON.stringify(body));
    })();
  }, []);
};
