import CalendarGenerator from "../views/Calendar/CalendarGenerator";

describe("CalendarGenerator", () => {
  test("should render days of month", () => {
    const Data = new Date("Mon Jun 14 2021 12:45:01 GMT+0200");

    expect(CalendarGenerator(Data)).toEqual({
      allDaysInMonth: 30,
      firstDayOfMonth: 3,
    });
  });

  test("increase month", () => {
    const Data = new Date("Wed Jul 14 2021 12:45:01 GMT+0200");

    expect(CalendarGenerator(Data)).toEqual({
      allDaysInMonth: 31,
      firstDayOfMonth: 6,
    });
  });

  test("decrease month", () => {
    const Data = new Date(" Fri May 14 2021 12:45:01 GMT+0200");

    expect(CalendarGenerator(Data)).toEqual({
      allDaysInMonth: 31,
      firstDayOfMonth: 1,
    });
  });
});
