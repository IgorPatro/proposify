import {
  getDashboardSettingsHref,
  getDashboardHref,
  getDashboardOffersHref,
  getDashboardTemplatesHref,
} from "@/utils/hrefs/dashboard";

export const DASHBOARD_NAVIGATION = [
  {
    content: "Dashboard",
    href: getDashboardHref(),
    name: "dashboard",
  },
  {
    content: "Oferty",
    href: getDashboardOffersHref(),
    name: "offers",
  },
  {
    content: "Szablony",
    href: getDashboardTemplatesHref(),
    name: "templates",
  },
  {
    content: "Ustawienia",
    href: getDashboardSettingsHref(),
    name: "settings",
  },
];
