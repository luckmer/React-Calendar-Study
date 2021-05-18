const Minutes = (date) =>
  `${date.getMinutes() <= 9 ? "0" + date.getMinutes() : date.getMinutes()}`;

const Hours = (date) =>
  `${date.getHours() <= 9 ? "0" + date.getHours() : date.getHours()}`;

const TodayFull = (date) =>
  `${date.getDate() <= 9 ? "0" + date.getDate() : date.getDate()}.${
    date.getMonth() + 1 <= 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
  }.${date.getFullYear()}`;

export { Minutes, Hours, TodayFull };
