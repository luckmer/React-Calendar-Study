import { useState } from "react";
import { UserData } from "../../reducers/DataSlice";
import { useSelector, useDispatch } from "react-redux";
import { FilterUpdate } from "../../reducers/ToDoSlice";
import { useEffect } from "react";

const Data = () => {
  const [open, setOpen] = useState(false);

  const state = useSelector((state) => state.data);
  const User = useSelector((state) => state.array);
  const dispatch = useDispatch();

  const FakeMonth = state.todayMonth;
  const FakeYear = state.todayYear;

  const TestId = User.FilterResult.map((item) => item.id);

  const TestMonth = User.FilterResult.map(
    (item) => parseFloat(item.month) === FakeMonth
  );

  const TestYear = User.FilterResult.map(
    (item) => parseFloat(item.year) === FakeYear
  );

  const SetDate = (Day, id) => {
    if (Day !== 0) {
      const day = `${Day <= 9 ? "0" + Day : Day}`;
      const month = `${FakeMonth <= 9 ? "0" + FakeMonth : FakeMonth}`;
      const FullDate = `${FakeYear}-${month}-${day}`;
      dispatch(
        UserData({
          data: FullDate,
          ID: id - 1,
          month: month,
          day: day,
          FakeYear: FakeYear,
        })
      );
    }
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
