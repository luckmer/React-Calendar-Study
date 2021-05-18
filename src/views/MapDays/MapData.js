import { CurrentDate, CreateNewData } from "../../exports/Index";
import { ColorUpdate } from "./ColorUpdate";
import Drag from "./Drag";
import Data from "./Data";
import {
  Planner,
  CardPlanner,
  CurrentData,
  CustomDayNumber,
  Collision,
  UpdateP,
} from "../../styles/views/MapDays.Style";

export const MapData = ({ id, day, dayName }) => {
  let { todayMonth, year } = CurrentDate();

  const { NoteDragOver, OnDropContainer, NoteDragStart } = Drag();

  const {
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
  } = Data();

  const result = TestId.includes(id - 1);

  return (
    <Planner
      key={id - 1}
      id={id - 1}
      onClick={() => SetDate(day - 1, id)}
      onDragOver={(e) => NoteDragOver(e)}
      onDrop={(e) => OnDropContainer(e)}
    >
      <CardPlanner id={id - 1} onDrop={(e) => OnDropContainer(e)}>
        <CurrentData check={open === true} id={id - 1}>
          {User.FilterResult.map((item) =>
            ColorUpdate(result, TestMonth, TestYear, item, id, NoteDragStart)
          )}
        </CurrentData>
        {open && (
          <Collision>
            <CreateNewData setOpen={setOpen} open={open} />
          </Collision>
        )}
        <CustomDayNumber
          check={
            day - 1 === state.todayDay &&
            todayMonth === FakeMonth &&
            year === FakeYear
          }
        >
          <UpdateP onClick={() => setOpen(!open)}>
            {day - 1} {dayName}
          </UpdateP>
        </CustomDayNumber>
      </CardPlanner>
    </Planner>
  );
};
