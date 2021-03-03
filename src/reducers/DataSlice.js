
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    time: "",
    hour: "",
    minutes: "",
    todayFullDate: "",
    todayWeekDay: "",
    todayDay: "",
    todayMonthName: "",
    todayMonth: "",
    todayYear: "",
    firstOfMonth: "",
    daysInMonth: "",
    firstDay: "",
    daysForEachDayNumberTest: [],
    days: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
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
    emptySpace: [],
    DaysForCurrentMonth: [],
    EmptyDaysForCurrentMonth: [],
    monthForFilter: "",
    yearForFilter: "",
    currentUserClickedData: "",
    currentUserClickedMonth: "",
    currentUserClickedDay: "",
    currentUserClickedYear: "",
    ID: "",
    selectedUserColorType: "",
    TestData: [],
};

const DataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        UpdateData: (state, action) => {
            const {
                time,
                hour,
                minutes,
                todayDay,
                todayMonthName,
                todayMonth,
                todayYear,
                todayWeekDay,
                todayFullDate,
                firstOfMonth,
                daysInMonth,
                firstDay,
            } = action.payload;
            state.time = time;
            state.hour = hour;
            state.minutes = minutes;
            state.todayDay = todayDay;
            state.todayMonthName = todayMonthName;
            state.todayMonth = todayMonth;
            state.todayYear = todayYear;
            state.firstDay = firstDay;
            state.daysInMonth = daysInMonth;
            state.firstOfMonth = firstOfMonth;
            state.todayWeekDay = todayWeekDay;
            state.todayFullDate = todayFullDate;
        },
        DaysForCurrentMonth: (state, action) => {
            const { data, emptyData, emptySpace } = action.payload;
            state.DaysForCurrentMonth = emptyData;
            state.EmptyDaysForCurrentMonth = data;
            state.emptySpace = emptySpace;
        },
        UpdateMonthYear: (state, action) => {
            const { month, year } = action.payload;

            state.todayMonth = month;
            if (state.todayMonth >= 13) {
                state.todayMonth = 1;
                state.todayYear = state.todayYear + 1;
            }
            if (state.todayMonth <= 0) {
                state.todayMonth = 12;
                state.todayYear = state.todayYear - 1;
            }
            if (month && month !== "") {
                state.todayYear = year;
            }
        },
        UserData: (state, action) => {
            const { data, ID, month, day, FakeYear } = action.payload;

            state.currentUserClickedData = data;
            state.currentUserClickedMonth = month;
            state.currentUserClickedDay = day;
            state.currentUserClickedYear = FakeYear;
            state.ID = ID;
        },
    },
});

export const {
    UpdateData,
    UserData,
    DaysForCurrentMonth,
    UpdateMonthYear,
} = DataSlice.actions;

export const stateData = (state) => state.data.currentUserClickedData;
export const setDataForCurrentDayData = (state) => state.data;
export const ColorData = (state) => state.data.color;
export default DataSlice.reducer;
