import { useEffect } from "react";
import { UpdateData } from "../../reducers/DataSlice";
import { DataControl } from "./DataControl";

export const UpdateButtonStartData = (state, dispatch) => {
  useEffect(() => {
    if (state.todayMonth) {
      const { firstDay, daysInMonth, Month, todayFull } = DataControl(
        state.todayMonth,
        state.todayYear,
        state.todayDay
      );

      dispatch(
        UpdateData({
          ...state,
          firstDay,
          daysInMonth,
          todayMonthName: state.months[Month - 1],
          todayFullDate: todayFull,
        })
      );
    }
  }, [state.todayMonth, state.todayYear, state.todayDay, dispatch, state]);
};
