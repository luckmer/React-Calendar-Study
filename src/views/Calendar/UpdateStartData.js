import { useEffect } from "react";
import { DaysForCurrentMonth } from "../../reducers/DataSlice";

export const UpdateStartData = (
  state,
  todayMonthName,
  dispatch,
  firstOfMonth
) => {
  useEffect(() => {
    let displayingMonthLength = [],
      emptySpace = "",
      dateS = 1;

    for (let i = 0; i < state.firstDay - 1; i++) {
      emptySpace += 1;
    }

    if (
      todayMonthName === "January" ||
      todayMonthName === "February" ||
      todayMonthName === "March" ||
      todayMonthName === "May" ||
      todayMonthName === "July" ||
      todayMonthName === "August" ||
      todayMonthName === "October" ||
      todayMonthName === "December"
    ) {
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
          if (dateS > state.daysInMonth) break;
          else {
            dateS++;
            displayingMonthLength.push({
              day: dateS,
              dayName: "",
              id: dateS,
            });
          }
        }
      }

      let month = state.todayMonth,
        year = state.todayYear,
        monthIndex = month - 1,
        date = new Date(year, monthIndex, 1),
        result = [];

      while (date.getMonth() === monthIndex) {
        result.push(state.days[date.getDay()]);
        date.setDate(date.getDate() + 1);
      }

      displayingMonthLength.forEach(
        (dayName, index) => (dayName.dayName = result[index])
      );

      const mappingArrayWithContent = displayingMonthLength.filter(
        (element) => element.day.length !== 0
      );

      const ClearDataToDisplay = displayingMonthLength.filter(
        (element) => element.day.length === 0
      );

      dispatch(
        DaysForCurrentMonth({
          emptySpace: emptySpace,
          data: ClearDataToDisplay,
          emptyData: mappingArrayWithContent,
        })
      );
    }
  }, [
    state.todayYear,
    state.todayMonth,
    dispatch,
    state.daysInMonth,
    firstOfMonth,
    todayMonthName,
    state.days,
    state.firstDay,
  ]);
};
