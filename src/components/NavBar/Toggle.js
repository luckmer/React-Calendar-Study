import { UpdateMonthYear } from "../../reducers/DataSlice";
import { useDispatch } from "react-redux";
import { CurrentDate } from "../../exports/Index";

function Toggle(state) {
  const dispatch = useDispatch();
  let { todayMonth, year } = CurrentDate();

  const toggleMonths = (whichWay) => {
    if (whichWay === "Add") {
      let todayMonth = state.todayMonth + 1;

      dispatch(
        UpdateMonthYear({
          month: todayMonth,
          year: state.todayYear,
        })
      );
    }
    if (whichWay === "Minus") {
      let todayMonth = state.todayMonth - 1;

      dispatch(UpdateMonthYear({ month: todayMonth, year: state.todayYear }));
    }

    if (whichWay === "Reset") {
      dispatch(UpdateMonthYear({ month: todayMonth, year: year }));
    }
  };
  return toggleMonths;
}
export default Toggle;
