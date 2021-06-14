const CalendarGenerator = (test) => {
  const month = test.getMonth() + 1;
  const year = test.getFullYear();
  const tempDate = new Date(year, month, 1);
  let firstDayOfMonthSu = tempDate.getDay();
  const firstDayOfMonth = firstDayOfMonthSu === 0 ? 6 : firstDayOfMonthSu - 1;
  const allDaysInMonth = new Date(year, month, 0).getDate();
  return { firstDayOfMonth, allDaysInMonth };
};

export default CalendarGenerator;
