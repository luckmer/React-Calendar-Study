export const DataControl = (Month, Year, DateS) => {
  const todayFull = `${DateS <= 9 ? "0" + DateS : DateS}.${
    Month + 1 <= 9 ? "0" + Month : Month
  }.${Year}`;

  let firstDay = new Date(Year, Month, 1).getDay();
  let daysInMonth = new Date(Year, Month, 0).getDate();

  return { firstDay, daysInMonth, Month, todayFull };
};
