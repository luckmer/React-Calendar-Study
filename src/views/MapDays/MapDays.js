import { setDataForCurrentDayData } from "../../reducers/DataSlice";
import { Cards } from "../../styles/views/MapDays.Style";
import { useSelector } from "react-redux";
import { MapData } from "./MapData";

const MapDays = () => {
  const state = useSelector(setDataForCurrentDayData);

  return (
    <div>
      <Cards>
        {state &&
          state.DaysForCurrentMonth.map(({ id, day, dayName }) => (
            <MapData key={id - 1} id={id} day={day} dayName={dayName} />
          ))}
      </Cards>
    </div>
  );
};

export default MapDays;
