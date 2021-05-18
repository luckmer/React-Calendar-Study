import { Minutes, Hours, TodayFull } from "./Model";

export const Data = (date) => {
  const todayFull = TodayFull(date);
  const hours = Hours(date);
  const minutes = Minutes(date);
  let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDate();
  let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  let daysInMonth = new Date(
    `${date.getMonth()} 01, ${date.getFullYear()}`
  ).getDay();

  return { hours, minutes, daysInMonth, lastDay, firstDay, todayFull };
};
