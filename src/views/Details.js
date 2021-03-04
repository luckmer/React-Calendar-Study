import { useState } from "react";
import { AddTodo, Userdata, findById } from "../reducers/ToDoSlice";
import { Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ColorData } from "../reducers/DataSlice";
import {
    Article,
    SideBar,
    TextPanel,
    Description,
    Header,
    UserHeader,
    Style,
    Card,
} from "../styles/views/Details.Style";

function Details({ match }) {
    const [state, setState] = useState({
        description: "",
        color: "",
    });
    const { id } = match.params,
        colors = useSelector(ColorData),
        userData = useSelector(Userdata),
        FindById = useSelector(findById),
        ForUserDataFilter = userData.find((i) => i._id.includes(id)),
        apiDataView = FindById.find((i) => i._id.includes(id)),
        check = new URLSearchParams(window.location.search).get("proxy"),
        dispatch = useDispatch(),
        history = useHistory();

    const Update = (state) => {
        const updatedPost = userData.map((item) => {
            if (id === item._id && item.id === parseFloat(check)) {
                return {
                    ...item,
                    colorType: state.color ? state.color : item.colorType,
                    description: state.description
                        ? state.description
                        : item.description,
                };
            }
            return item;
        });
        dispatch(AddTodo(updatedPost));
    };

    const DeletePost = (id) => {
        const updateCalendar = userData.filter((item) => item._id !== id);
        dispatch(AddTodo(updateCalendar));
        history.goBack();
    };

    const SetColor = (col) => {
        setState({ ...state, color: col });
        Update(state);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.description) {
            Update(state);
            setState({ description: "" });
        }
    };

    const typeText = ForUserDataFilter ? ForUserDataFilter.description : "";
    const typeColor = ForUserDataFilter ? ForUserDataFilter.colorType : "";

    return apiDataView ? (
        <Article>
            <Header
                userSelection={apiDataView.colorType}
                Fake={typeColor ? typeColor : state.color}></Header>
            <UserHeader>
                <h1> {apiDataView.filter.text}</h1>
            </UserHeader>
            <Card>
                <span>Colors</span>
                <div>
                    {colors.map((item) => (
                        <Style
                            key={item}
                            color={item}
                            onClick={() => SetColor(item)}></Style>
                    ))}
                </div>
                <div>
                    <Description>
                        <h3>description</h3>
                    </Description>
                    <TextPanel>
                        <form onSubmit={handleSubmit}>
                            <textarea
                                value={state.description}
                                name='description'
                                type='text'
                                onChange={(e) =>
                                    setState({
                                        ...state,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                            />
                            <button type='submit'>Submit</button>
                        </form>
                        <div>
                            {typeText
                                ? typeText
                                : "there is no description yet "}
                        </div>
                    </TextPanel>
                </div>
            </Card>
            <SideBar>
                <button onClick={() => DeletePost(apiDataView._id)}>
                    Delete
                </button>
            </SideBar>
        </Article>
    ) : (
        <Redirect
            to={{
                pathname: "/",
                state: { referrer: "/" },
            }}
        />
    );
}

export default Details;
