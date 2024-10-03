import {
  HiHome,
  HiDocument,
  HiCog6Tooth,
  HiMiniRectangleStack,
  HiUsers,
} from "react-icons/hi2";

import {
  getDashboardSettingsHref,
  getDashboardHref,
  getDashboardOffersHref,
  getDashboardTemplatesHref,
  getDashboardCustomersHref,
} from "@/utils/hrefs/dashboard";

export const DASHBOARD_NAVIGATION = [
  {
    content: "Dashboard",
    href: getDashboardHref(),
    icon: HiHome,
    name: "dashboard",
  },
  {
    content: "Oferty",
    href: getDashboardOffersHref(),
    icon: HiDocument,
    name: "offers",
  },
  {
    content: "Szablony",
    href: getDashboardTemplatesHref(),
    icon: HiMiniRectangleStack,
    name: "templates",
  },
  {
    content: "Klienci",
    href: getDashboardCustomersHref(),
    icon: HiUsers,
    name: "customers",
  },
  {
    content: "Ustawienia",
    href: getDashboardSettingsHref(),
    icon: HiCog6Tooth,
    name: "settings",
  },
];
