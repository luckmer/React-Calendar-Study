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

export const MapData = ({ id, day, dayName, state }) => {
  let { todayMonth, year } = CurrentDate();
  const { NoteDragOver, OnDropContainer, NoteDragStart } = Drag(state);

  const {
    TestId,
    TestMonth,
    TestYear,
    SetDate,
    User,
    FakeMonth,
    FakeYear,
    open,
    setOpen,
    Day,
  } = Data();

  const result = TestId.includes(id);

  return (
    <Planner
      Style={id}
      key={id}
      id={id}
      onClick={() => SetDate(day - 1, id)}
      onDragOver={(e) => NoteDragOver(e)}
      onDrop={(e) => OnDropContainer(e)}
    >
      <CardPlanner id={id} onDrop={(e) => OnDropContainer(e)}>
        <CurrentData check={open === true} id={id}>
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
            day === Day && todayMonth === FakeMonth + 1 && year === FakeYear
          }
        >
          {dayName === -99 ? (
            ""
          ) : (
            <UpdateP onClick={() => setOpen(!open)} id={id}>
              {dayName}
            </UpdateP>
          )}
        </CustomDayNumber>
      </CardPlanner>
    </Planner>
  );
};
