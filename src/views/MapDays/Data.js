import { useState } from "react";
import { UserData } from "../../reducers/DataSlice";
import { useSelector, useDispatch } from "react-redux";
import { FilterUpdate } from "../../reducers/ToDoSlice";
import DayCreator from "./DayCreator";
import { useEffect } from "react";

const Data = () => {
  const [open, setOpen] = useState(false);

  const state = useSelector((state) => state.data);
  const User = useSelector((state) => state.array);
  const dispatch = useDispatch();

  const FakeMonth = new Date(state.date).getMonth() + 1;
  const FakeYear = new Date(state.date).getFullYear();

  const TestId = User.FilterResult.map((item) => item.id);

  const TestMonth = User.FilterResult.map(
    ({ month }) => parseFloat(month) === FakeMonth
  );

  const TestYear = User.FilterResult.map(
    ({ year }) => parseFloat(year) === FakeYear
  );

  const SetDate = (Day, id) => {
    const { FullDate, month, day } = DayCreator(Day, FakeMonth, FakeYear);

    dispatch(
      UserData({
        data: FullDate,
        ID: id - 1,
        month: month,
        day: day,
        FakeYear: FakeYear,
      })
    );
  };

  useEffect(() => {
    let DataS = User.newContent;

    if (FakeYear)
      DataS = DataS.filter((item) => parseFloat(item.year) === FakeYear);

    if (FakeMonth)
      DataS = DataS.filter((item) => parseFloat(item.month) === FakeMonth);

    dispatch(FilterUpdate(DataS));
  }, [dispatch, User.newContent, FakeYear, FakeMonth]);

  return {
    TestId,
    TestMonth,
    TestYear,
    SetDate,
    User,
    state,
    FakeMonth,
    FakeYear,
    open,
    setOpen,
  };
};

export default Data;
