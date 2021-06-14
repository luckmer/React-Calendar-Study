import { useEffect } from "react";
import { DaysForCurrentMonth } from "../../reducers/DataSlice";
import { useSelector, useDispatch } from "react-redux";
import { ControlPanel } from "../../exports/Index";
import CalendarGenerator from "./CalendarGenerator";

function Calendar() {
  const date = useSelector((state) => state.data.date);
  const dispatch = useDispatch();

  useEffect(() => {
    const test = new Date(date);
    const { firstDayOfMonth, allDaysInMonth } = CalendarGenerator(test);

    let blanks = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      const result = {
        day: "blank",
        dayName: "",
        id: -99,
      };
      blanks.push(result);
    }
    const days = [];
    for (let d = 1; d <= allDaysInMonth; d++) {
      const result = {
        day: d,
        dayName: "",
        id: d,
      };
      days.push(result);
    }
    const totalSlots = [...blanks, ...days];
    const rows = [];

    let cells = [];
    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells);
      }
    });
    dispatch(
      DaysForCurrentMonth({
        emptySpace: "",
        data: "",
        emptyData: rows,
      })
    );
  }, [dispatch, date]);

  return <ControlPanel />;
}

export default Calendar;
