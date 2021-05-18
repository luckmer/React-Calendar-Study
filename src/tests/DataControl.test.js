import { DataControl } from "../views/Calendar/DataControl";

describe("DataControl", () => {
  test("expect data", () => {
    const Month = 5;
    const Year = 2021;
    const DateS = 17;

    expect(DataControl(Month, Year, DateS)).toEqual({
      Month: 5,
      daysInMonth: 31,
      firstDay: 2,
      todayFull: "17.05.2021",
    });
  });

  test("expect a new data type", () => {
    const Month = 7;
    const Year = 2021;
    const DateS = 3;

    expect(DataControl(Month, Year, DateS)).toEqual({
      Month: 7,
      daysInMonth: 31,
      firstDay: 0,
      todayFull: "03.07.2021",
    });
  });

  test("expect a new year", () => {
    const Month = 3;
    const Year = 2020;
    const DateS = 20;

    expect(DataControl(Month, Year, DateS)).toEqual({
      Month: 3,
      daysInMonth: 31,
      firstDay: 3,
      todayFull: "20.03.2020",
    });
  });

  test("expect a new day type I", () => {
    const Month = 3;
    const Year = 2020;
    const DateS = 12;

    expect(DataControl(Month, Year, DateS)).toEqual({
      Month: 3,
      daysInMonth: 31,
      firstDay: 3,
      todayFull: "12.03.2020",
    });
  });

  test("expect a new day type II", () => {
    const Month = 3;
    const Year = 2020;
    const DateS = 1;

    expect(DataControl(Month, Year, DateS)).toEqual({
      Month: 3,
      daysInMonth: 31,
      firstDay: 3,
      todayFull: "01.03.2020",
    });
  });
});
