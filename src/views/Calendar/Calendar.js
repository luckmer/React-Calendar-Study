import { useSelector, useDispatch } from "react-redux";
import { setDataForCurrentDayData } from "../../reducers/DataSlice";
import { UpdateButtonStartData } from "./UpdateButtonStartData";
import { UpdateStartData } from "./UpdateStartData";
import { ControlPanel } from "../../exports/Index";
import { SetStartData } from "./SetStartData";

function Calendar() {
  const state = useSelector(setDataForCurrentDayData);
  const dispatch = useDispatch();

  const { firstOfMonth, todayMonthName } = state;

  SetStartData(state, dispatch);
  UpdateStartData(state, todayMonthName, dispatch, firstOfMonth);
  UpdateButtonStartData(state, dispatch);

  return <ControlPanel />;
}

export default Calendar;
