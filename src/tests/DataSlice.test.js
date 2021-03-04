/** @format */

import reducer, {
    initialState,
    UpdateData,
    UserData,
    DaysForCurrentMonth,
    UpdateMonthYear,
} from "../reducers/DataSlice";

describe("data", () => {
    test("should return initialState", () => {
        const nextState = initialState;
        expect(undefined).toEqual(nextState);
    });

    test("should properly update days in initalState", () => {
        const payload = {
            data: [],
            emptyData: [
                { day: 2, id: 2 },
                { day: 3, id: 3 },
            ],
            emptySpace: "",
        };

        const State = reducer(initialState, DaysForCurrentMonth(payload));
        expect(State).toEqual({
            DaysForCurrentMonth: [
                { day: 2, id: 2 },
                { day: 3, id: 3 },
            ],
            EmptyDaysForCurrentMonth: [],
            ID: "",
            color: [
                "#64D901",
                "#CF72F4",
                "#FFB700",
                "#F47272",
                "#61bd4f",
                "#ff9f1a",
                "#091e42",
                "#00c2e0",
                "#f00049",
            ],
            currentUserClickedData: "",
            currentUserClickedDay: "",
            currentUserClickedMonth: "",
            currentUserClickedYear: "",
            days: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday ",
                "Thursday",
                "Friday",
                "Saturday",
            ],
            daysInMonth: "",
            emptySpace: "",
            firstDay: "",
            firstOfMonth: "",
            hour: "",
            minutes: "",
            monthForFilter: "",
            months: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ],
            selectedUserColorType: "",
            time: "",
            todayDay: "",
            todayFullDate: "",
            todayMonth: "",
            todayMonthName: "",
            todayWeekDay: "",
            todayYear: "",
            yearForFilter: "",
        });
    });

    test("should  updateMonth Year", () => {
        const payload = { month: 2, year: 2021 };
        const nextState = reducer(initialState, UpdateMonthYear(payload));
        expect(nextState.value).toBe(initialState);
    });

    test("updated initialState", () => {
        const payload = {
            time: "14 : 59",
            hour: "14",
            minutes: "59",
            todayDay: 25,
            todayMonthName: "February",
            todayMonth: "02",
            todayYear: 2021,
            todayWeekDay: 4,
            todayFullDate: "25.02.2021",
            firstOfMonth: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday ",
                "Thursday",
                "Friday",
                "Saturday",
            ],
            daysInMonth: 28,
            firstDay: 1,
        };
        const nextState = reducer(initialState, UpdateData(payload));
        expect(nextState.value).toBe(initialState);
    });

    test("should return userData", () => {
        const payload = { data: "20", ID: 2, day: 2, FakeYear: 2021 };
        const nextState = reducer(initialState, UserData(payload));
        expect(nextState.value).toEqual(initialState);
    });
});
