import {
  getDashboardSettingsHref,
  getDashboardHref,
  getDashboardOffersHref,
  getDashboardTemplatesHref,
} from "@/utils/hrefs/dashboard";
import {
  HiHome,
  HiDocument,
  HiCog6Tooth,
  HiMiniRectangleStack,
} from "react-icons/hi2";

export const DASHBOARD_NAVIGATION = [
  {
    content: "Dashboard",
    href: getDashboardHref(),
    name: "dashboard",
    icon: HiHome,
  },
  {
    content: "Oferty",
    href: getDashboardOffersHref(),
    name: "offers",
    icon: HiDocument,
  },
  {
    content: "Szablony",
    href: getDashboardTemplatesHref(),
    name: "templates",
    icon: HiMiniRectangleStack,
  },
  {
    content: "Ustawienia",
    href: getDashboardSettingsHref(),
    name: "settings",
    icon: HiCog6Tooth,
  },
];
