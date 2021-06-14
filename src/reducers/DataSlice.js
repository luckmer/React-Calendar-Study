import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: new Date(),
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
    DaysForCurrentMonth: (state, action) => {
      const { data, emptyData, emptySpace } = action.payload;
      state.DaysForCurrentMonth = emptyData;
      state.EmptyDaysForCurrentMonth = data;
      state.emptySpace = emptySpace;
    },

    UserData: (state, action) => {
      const { data, ID, month, day, FakeYear } = action.payload;
      state.currentUserClickedData = data;
      state.currentUserClickedMonth = month;
      state.currentUserClickedDay = day;
      state.currentUserClickedYear = FakeYear;
      state.ID = ID;
    },
    IncreaseDate: (state, action) => {
      state.date = action.payload;
    },

    Reset: (state, action) => {
      state.date = action.payload;
    },
  },
});

export const { UserData, DaysForCurrentMonth, IncreaseDate, Reset } =
  DataSlice.actions;

export const stateData = (state) => state.data.currentUserClickedData;
export const setDataForCurrentDayData = (state) => state.data;
export const ColorData = (state) => state.data.color;
export default DataSlice.reducer;
