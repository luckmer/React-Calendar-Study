import { setDataForCurrentDayData } from "../../reducers/DataSlice";
import { useSelector } from "react-redux";
import { MapData } from "./MapData";
import styled from "styled-components";

const Div = styled.div`
  width: 100vw;
  display: flex;

  @media screen and (max-width: 900px) {
    flex-flow: row wrap;
  }
`;

const MapDays = () => {
  const state = useSelector(setDataForCurrentDayData);
  const data = useSelector((state) => state);
  return state.DaysForCurrentMonth.map((d, i) => {
    return (
      <Div key={i}>
        {d.map(({ id, day }, i) => (
          <MapData key={i} id={id} day={day} dayName={id} state={data} />
        ))}
      </Div>
    );
  });
};

export default MapDays;
