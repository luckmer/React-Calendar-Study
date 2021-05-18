import { Data } from "../views/Calendar/Data";

describe("Data", () => {
  test("should", () => {});

  const day = new Date();

  test("expect valuable data", () => {
    expect(Data(day)).toEqual({
      daysInMonth: 4,
      firstDay: 1,
      hours: "10",
      lastDay: 31,
      minutes: "46",
      todayFull: "18.05.2021",
    });
  });

  test("expect new content", () => {
    expect(Data(day)).toEqual({
      daysInMonth: 4,
      firstDay: 1,
      hours: "10",
      lastDay: 31,
      minutes: "46",
      todayFull: "18.05.2021",
    });
  });
});
