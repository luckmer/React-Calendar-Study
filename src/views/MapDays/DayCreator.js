const DayCreator = (Day, FakeMonth, FakeYear) => {
  const dayS = Day + 1;
  const day = `${dayS <= 9 ? "0" + dayS : dayS}`;
  const month = `${FakeMonth <= 9 ? "0" + FakeMonth : FakeMonth}`;
  const FullDate = `${FakeYear}-${month}-${dayS}`;
  return { FullDate, month, day };
};

export default DayCreator;
