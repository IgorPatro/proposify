import { formatDate } from "./date";

export const formatDateToTime = (date: Date | string) => {
  return formatDate(date, "HH:mm");
};
