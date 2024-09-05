import {
  getHomeHref,
  getHomeOffersHref,
  getHomeTemplatesHref,
} from "@/utils/hrefs/home";

export const HOME_NAVIGATION = [
  {
    content: "Home",
    href: getHomeHref(),
    name: "home",
  },
  {
    content: "Oferty",
    href: getHomeOffersHref(),
    name: "offers",
  },
  {
    content: "Templatki",
    href: getHomeTemplatesHref(),
    name: "templates",
  },
  {
    content: "Uzytkownicy",
    href: "/home",
    name: "users",
  },
  {
    content: "Ustawienia",
    href: "/home",
    name: "settings",
  },
];
