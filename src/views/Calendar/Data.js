export const Data = (date) => {
  const todayFull = `${
    date.getDate() <= 9 ? "0" + date.getDate() : date.getDate()
  }.${
    date.getMonth() + 1 <= 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
  }.${date.getFullYear()}`;

  const hours = `${
    date.getHours() <= 9 ? "0" + date.getHours() : date.getHours()
  }`;
  const minutes = `${
    date.getMinutes() <= 9 ? "0" + date.getMinutes() : date.getMinutes()
  }`;

  let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDate();
  let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  let daysInMonth = new Date(
    `${date.getMonth()} 01, ${date.getFullYear()}`
  ).getDay();

  return { hours, minutes, daysInMonth, lastDay, firstDay, todayFull };
};
