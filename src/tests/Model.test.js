import { Minutes, Hours, TodayFull } from "../views/Calendar/Data/Model";

describe("Minutes", () => {
  test("should return  minutes", () => {
    const date = new Date("Tue May 18 2021 16:30:25");
    expect(Minutes(date)).toBe("30");
  });
  test("expect new minutes", () => {
    const date = new Date("Tue May 18 2021 16:01:25");
    expect(Minutes(date)).toBe("01");
  });
});

describe("should return hours", () => {
  test("return hours I", () => {
    const date = new Date("Tue May 18 2021 16:30:25 ");
    expect(Hours(date)).toBe("16");
  });

  test("expect new hour", () => {
    const date = new Date("Tue May 18 2021 12:30:25");
    expect(Hours(date)).toBe("12");
  });
});

describe("should return full day", () => {
  test("should return first full day", () => {
    const date = new Date("Tue May 18 2021 16:30:25");
    expect(TodayFull(date)).toBe("18.05.2021");
  });

  test("expect new data", () => {
    const date = new Date("2019-04-07T10:20:30Z");
    expect(TodayFull(date)).toBe("07.04.2019");
  });
});
