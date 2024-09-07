import { format, parseISO } from "date-fns";

export const formatDate = (date: Date | string, formatStr: string) => {
  if (typeof date === "string") {
    return format(parseISO(date), formatStr);
  }
  return format(date, formatStr);
};

export const formatDateToDayMonthYear = (date: Date | string) => {
  return formatDate(date, "d MMMM yyyy");
};
