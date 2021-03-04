import { Article, HeaderBox, Header } from "../styles/components/NavBar";
import { UpdateMonthYear } from "../reducers/DataSlice";
import { useSelector, useDispatch } from "react-redux";
import { CurrentDate } from "../exports/Index";
import { Link } from "react-router-dom";

function NavBar() {
    const state = useSelector((state) => state.data);

    const dispatch = useDispatch();
    let { todayMonth, year } = CurrentDate();

    const toggleMonths = (whichWay) => {
        if (whichWay === "Add") {
            let todayMonth = state.todayMonth + 1;

            dispatch(
                UpdateMonthYear({
                    month: todayMonth,
                    year: state.todayYear,
                })
            );
        }
        if (whichWay === "Minus") {
            let todayMonth = state.todayMonth - 1;

            dispatch(
                UpdateMonthYear({ month: todayMonth, year: state.todayYear })
            );
        }

        if (whichWay === "Reset") {
            dispatch(UpdateMonthYear({ month: todayMonth, year: year }));
        }
    };
    return (
        <Article>
            <HeaderBox>
                <Header>
                    <button onClick={() => toggleMonths("Minus")}>-</button>
                    <p onClick={() => toggleMonths("Reset")}>
                        <Link to='/'>
                            {state.todayMonthName} {state.todayFullDate}
                        </Link>
                    </p>
                    <button onClick={() => toggleMonths("Add")}>+</button>
                </Header>
            </HeaderBox>
        </Article>
    );
}

export default NavBar;
