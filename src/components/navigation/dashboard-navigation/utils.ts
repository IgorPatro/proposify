import { truncate } from "lodash";

export const generateBreadcrumbItems = (pathname: string) => {
  const paths = pathname.split("/").filter((path) => path);

  let items = [];

  for (let i = 0; i < paths.length; i++) {
    items.push({
      label: getLabel(paths[i]),
      href: `/${paths.slice(0, i + 1).join("/")}`,
    });
  }

  return items;
};

const getLabel = (item?: string) => {
  switch (item) {
    case "dashboard":
      return "Dashboard";
    case "offer":
      return "Oferty";
    case "template":
      return "Szablony";
    case "customer":
      return "Klienci";
    case "settings":
      return "Ustawienia";
    default:
      return truncate(item, { length: 20 });
  }
};
