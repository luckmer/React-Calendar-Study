import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ControlPanel } from "../exports/Index";
import {
    UpdateData,
    DaysForCurrentMonth,
    setDataForCurrentDayData,
} from "../reducers/DataSlice";

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

const SetStartData = (state, dispatch) => {
    useEffect(() => {
        const date = new Date();
        const counter = (date.getDate() % 7) - 1;
        const firstOfMonth = state.days.slice(date.getDay() - counter - 1);

        const todayFull = `${
            date.getDate() <= 9 ? "0" + date.getDate() : date.getDate()
        }.${
            date.getMonth() + 1 <= 9
                ? "0" + (date.getMonth() + 1)
                : date.getMonth() + 1
        }.${date.getFullYear()}`;

        const hours = `${
            date.getHours() <= 9 ? "0" + date.getHours() : date.getHours()
        }`;
        const minutes = `${
            date.getMinutes() <= 9 ? "0" + date.getMinutes() : date.getMinutes()
        }`;

        let firstDay = new Date(
            date.getFullYear(),
            date.getMonth(),
            1
        ).getDate();
        let lastDay = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
        ).getDate();

        let daysInMonth = new Date(
            `${date.getMonth()} 01, ${date.getFullYear()}`
        ).getDay();
        dispatch(
            UpdateData({
                time: `${hours} : ${minutes}`,
                hour: hours,
                minutes,
                daysInMonth,
                lastDay: lastDay,
                firstDay: firstDay,
                todayDay: date.getDate(),
                todayMonthName: state.months[date.getMonth()],
                todayMonth: date.getMonth() + 1,
                firstOfMonth: firstOfMonth,
                todayYear: date.getFullYear(),
                todayWeekDay: date.getDay(),
                todayFullDate: todayFull,
            })
        );
    }, [dispatch, state.months, state.days]);
};

const UpdateStartData = (state, todayMonthName, dispatch, firstOfMonth) => {
    useEffect(() => {
        let displayingMonthLength = [],
            emptySpace = "",
            dateS = 1;

        for (let i = 0; i < state.firstDay - 1; i++) {
            emptySpace += 1;
        }

        if (
            todayMonthName === "January" ||
            todayMonthName === "February" ||
            todayMonthName === "March" ||
            todayMonthName === "May" ||
            todayMonthName === "July" ||
            todayMonthName === "August" ||
            todayMonthName === "October" ||
            todayMonthName === "December"
        ) {
            for (let i = 0; i < 6; i++) {
                for (let j = 0; j < 7; j++) {
                    if (dateS > state.daysInMonth) break;
                    else {
                        dateS++;
                        displayingMonthLength.push({
                            day: dateS,
                            dayName: "",
                            id: dateS,
                        });
                    }
                }
            }

            let month = state.todayMonth,
                year = state.todayYear,
                monthIndex = month - 1,
                date = new Date(year, monthIndex, 1),
                result = [];

            while (date.getMonth() === monthIndex) {
                result.push(state.days[date.getDay()]);
                date.setDate(date.getDate() + 1);
            }

            displayingMonthLength.forEach(
                (dayName, index) => (dayName.dayName = result[index])
            );

            const mappingArrayWithContent = displayingMonthLength.filter(
                (element) => element.day.length !== 0
            );
            const ClearDataToDisplay = displayingMonthLength.filter(
                (element) => element.day.length === 0
            );

            dispatch(
                DaysForCurrentMonth({
                    emptySpace: emptySpace,
                    data: ClearDataToDisplay,
                    emptyData: mappingArrayWithContent,
                })
            );
        }
    }, [
        state.todayYear,
        state.todayMonth,
        dispatch,
        state.daysInMonth,
        firstOfMonth,
        todayMonthName,
        state.days,
        state.firstDay,
    ]);
};

const UpdateButtonStartData = (state, dispatch) => {
    useEffect(() => {
        if (state.todayMonth) {
            let M = state.todayMonth,
                Y = state.todayYear;

            const DateS = state.todayDay;
            const todayFull = `${DateS <= 9 ? "0" + DateS : DateS}.${
                M + 1 <= 9 ? "0" + M : M
            }.${Y}`;

            let firstDay = new Date(Y, M, 1).getDay();
            let daysInMonth = new Date(Y, M, 0).getDate();
            dispatch(
                UpdateData({
                    ...state,
                    firstDay,
                    daysInMonth,
                    todayMonthName: state.months[M - 1],
                    todayFullDate: todayFull,
                })
            );
        }
    }, [state.todayMonth, state.todayYear, state.todayDay, dispatch, state]);
};
