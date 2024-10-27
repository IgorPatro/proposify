import { format, parseISO, setDefaultOptions } from "date-fns";
import { pl } from "date-fns/locale";
setDefaultOptions({ locale: pl });

export const formatDate = (date: Date | string, formatStr: string) => {
  if (typeof date === "string") {
    return format(parseISO(date), formatStr);
  }
  return format(date, formatStr);
};

export const formatDateToDayFullMonthYear = (date: Date | string) => {
  return formatDate(date, "d MMMM yyyy");
};

export const formatDateToDayShortMonthYear = (date: Date | string) => {
  return formatDate(date, "d MMM yyyy");
};
