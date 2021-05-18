import { Data } from "../views/Calendar/Data/Data";

describe("Data", () => {
  test("expect valuable data", () => {
    const day = new Date("Tue May 18 2021 16:30:25");
    expect(Data(day)).toEqual({
      daysInMonth: 4,
      firstDay: 1,
      hours: "16",
      lastDay: 31,
      minutes: "30",
      todayFull: "18.05.2021",
    });
  });

  test("expect new date", () => {
    const day = new Date("Tue May 02 2014 12:30:25");
    expect(Data(day)).toEqual({
      daysInMonth: 2,
      firstDay: 1,
      hours: "12",
      lastDay: 31,
      minutes: "30",
      todayFull: "02.05.2014",
    });
  });
});
