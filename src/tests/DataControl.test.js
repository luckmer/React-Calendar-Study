import DayCreator from "../views/MapDays/DayCreator";

describe("DayCreator", () => {
  test("expect data", () => {
    const Day = 2;
    const FakeMonth = 5;
    const FakeYear = 2021;

    expect(DayCreator(Day, FakeMonth, FakeYear)).toEqual({
      FullDate: "2021-05-3",
      day: "03",
      month: "05",
    });
  });
  test("expect a new data type", () => {
    const Day = 7;
    const FakeYear = 2021;
    const FakeMonth = 3;
    expect(DayCreator(Day, FakeYear, FakeMonth)).toEqual({
      FullDate: "3-2021-8",
      day: "08",
      month: "2021",
    });
  });
  test("expect a new year", () => {
    const Day = 3;
    const FakeYear = 2020;
    const FakeMonth = 20;
    expect(DayCreator(Day, FakeYear, FakeMonth)).toEqual({
      FullDate: "20-2020-4",
      day: "04",
      month: "2020",
    });
  });
  test("expect a new day type I", () => {
    const Day = 3;
    const FakeYear = 2020;
    const FakeMonth = 12;
    expect(DayCreator(Day, FakeYear, FakeMonth)).toEqual({
      FullDate: "12-2020-4",
      day: "04",
      month: "2020",
    });
  });
  test("expect a new day type II", () => {
    const Day = 3;
    const FakeYear = 2020;
    const FakeMonth = 1;
    expect(DayCreator(Day, FakeYear, FakeMonth)).toEqual({
      FullDate: "1-2020-4",
      day: "04",
      month: "2020",
    });
  });
});
