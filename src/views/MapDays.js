/** @format */
import { useState } from "react";
import { UserData, setDataForCurrentDayData } from "../reducers/DataSlice";
import { CurrentDate, CreateNewData } from "../exports/Index";
import { useSelector, useDispatch } from "react-redux";
import { FilterUpdate } from "../reducers/ToDoSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import {
    Days,
    Cards,
    Planner,
    CardPlanner,
    CurrentData,
    CustomDayNumber,
    Colider,
    UpdateColor,
    UpdateP,
} from "../styles/views/MapDays.Style";

const MapDays = () => {
    const state = useSelector(setDataForCurrentDayData);
    if (state) {
        return (
            <div>
                <Days></Days>
                <Cards>
                    {state.DaysForCurrentMonth.map(({ id, day, dayName }) => (
                        <MapData
                            key={id - 1}
                            id={id}
                            day={day}
                            dayName={dayName}
                        />
                    ))}
                </Cards>
            </div>
        );
    }
    return (
        <div>
            <h1>something went wrong or there is no Data</h1>
        </div>
    );
};

const MapData = ({ id, day, dayName }) => {
    const [open, setOpen] = useState(false);

    const state = useSelector((state) => state.data);
    const User = useSelector((state) => state.array);

    const dispatch = useDispatch();
    let { todayMonth, year } = CurrentDate();
    const FakeMonth = state.todayMonth;
    const FakeYear = state.todayYear;

    const SetDate = (Day) => {
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

    const TestId = User.FilterResult.map((item) => item.id);
    const TestMonth = User.FilterResult.map(
        (item) => parseFloat(item.month) === FakeMonth
    );
    const TestYear = User.FilterResult.map(
        (item) => parseFloat(item.year) === FakeYear
    );
    const result = TestId.includes(id - 1);

    useEffect(() => {
        let DataS = User.newContent;

        if (FakeYear) {
            DataS = DataS.filter((item) => parseFloat(item.year) === FakeYear);
        }

        if (FakeMonth) {
            DataS = DataS.filter(
                (item) => parseFloat(item.month) === FakeMonth
            );
        }

        dispatch(FilterUpdate(DataS));
    }, [dispatch, User.newContent, FakeYear, FakeMonth]);

    return (
        <Planner key={id - 1} id={id - 1} onClick={() => SetDate(day - 1)}>
            <CardPlanner>
                <CurrentData check={open === true}>
                    {User.FilterResult.map((item) => {
                        return result &&
                            TestMonth &&
                            TestYear &&
                            item.id === id - 1 ? (
                            <UpdateColor
                                key={item._id}
                                ColorType={item.colorType}>
                                <Link to={`/${item._id}?proxy=${id - 1}`}>
                                    <p>- {item.filter.text}</p>
                                    <span>{item.description ? "✓" : ""}</span>
                                </Link>
                            </UpdateColor>
                        ) : (
                            ""
                        );
                    })}
                </CurrentData>
                {open ? (
                    <Colider>
                        <CreateNewData setOpen={setOpen} open={open} />
                    </Colider>
                ) : (
                    ""
                )}
                <CustomDayNumber
                    check={
                        day - 1 === state.todayDay &&
                        todayMonth === FakeMonth &&
                        year === FakeYear
                    }>
                    <UpdateP onClick={() => setOpen(!open)}>
                        {day - 1} {dayName}
                    </UpdateP>
                </CustomDayNumber>
            </CardPlanner>
        </Planner>
    );
};

export default MapDays;
