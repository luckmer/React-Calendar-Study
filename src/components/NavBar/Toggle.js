import { IncreaseDate, Reset } from "../../reducers/DataSlice";
import { useDispatch } from "react-redux";

function Toggle(state) {
  const dispatch = useDispatch();

  const toggleMonths = (whichWay) => {
    let todayDate = state.date;
    let NewDate = new Date(todayDate);

    if (whichWay === "Add") {
      NewDate.setMonth(NewDate.getMonth() + 1);
      dispatch(IncreaseDate(NewDate));
    }

    if (whichWay === "Minus") {
      NewDate.setMonth(NewDate.getMonth() - 1);
      dispatch(IncreaseDate(NewDate));
    }

    if (whichWay === "Reset") {
      dispatch(Reset(new Date()));
    }
  };
  return toggleMonths;
}
export default Toggle;
