import { useEffect } from "react";
import { UpdateData } from "../../reducers/DataSlice";
import { Data } from "./Data/Data";

export const SetStartData = (state, dispatch) => {
  useEffect(() => {
    const date = new Date();
    const counter = (date.getDate() % 7) - 1;
    const firstOfMonth = state.days.slice(date.getDay() - counter - 1);

    const { hours, minutes, daysInMonth, lastDay, firstDay, todayFull } =
      Data(date);

    dispatch(
      UpdateData({
        time: `${hours} : ${minutes}`,
        hour: hours,
        minutes,
        daysInMonth,
        lastDay: lastDay,
        firstDay: firstDay,
        todayDay: date.getDate(),
        todayMonthName: state.months[date.getMonth()],
        todayMonth: date.getMonth() + 1,
        firstOfMonth: firstOfMonth,
        todayYear: date.getFullYear(),
        todayWeekDay: date.getDay(),
        todayFullDate: todayFull,
      })
    );
  }, [dispatch, state.months, state.days]);
};
