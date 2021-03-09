import { useState } from "react";
import { stateData, setDataForCurrentDayData } from "../reducers/DataSlice";
import { Button, Form, Article } from "../styles/views/CreateNewData.Style";
import { useSelector, useDispatch } from "react-redux";
import { Userdata } from "../reducers/ToDoSlice";
import { AddTodo } from "../reducers/ToDoSlice";
import { nanoid } from "@reduxjs/toolkit";

function CreateNewData({ setOpen, open }) {
    const [filter, setFilter] = useState({
        text: "",
    });
    const setDataForCurrentDay = useSelector(setDataForCurrentDayData);
    const state = useSelector(stateData);
    const data = useSelector(Userdata);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFilter({ ...filter, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const {
            currentUserClickedDay,
            currentUserClickedMonth,
            currentUserClickedYear,
            ID,
        } = setDataForCurrentDay;
        if (filter.text && filter.text !== "" && filter.text.length > 1) {
            const newData = {
                filter,
                id: ID,
                description: "",
                colorType: "#f00049",
                day: currentUserClickedDay,
                month: currentUserClickedMonth,
                year: currentUserClickedYear,
                _id: nanoid(),
            };
            const result = data.concat(newData);
            dispatch(AddTodo(result));
            setFilter("");
            setOpen(!open);
        }
    };
    return (
        <Article>
            <Form onSubmit={handleSubmit} > {state ? state : ""}
                <input type='text'
                    name='text'
                    onChange={handleChange}
                /> <Button type='submit' > Submit </Button>
            </Form>
            <Button onClick={() => setOpen(!open)} > X </Button>
        </Article>
    );
}

export default CreateNewData;
