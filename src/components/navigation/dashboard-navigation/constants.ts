import {
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
    content: "Templatki",
    href: getDashboardTemplatesHref(),
    name: "templates",
  },
];
