import { useState } from "react";
import {
  stateData,
  setDataForCurrentDayData,
} from "../../../reducers/DataSlice";
import { useSelector, useDispatch } from "react-redux";
import { Userdata } from "../../../reducers/ToDoSlice";
import { AddTodo } from "../../../reducers/ToDoSlice";
import { Data } from "./Data";

function DataCreator(setOpen, open) {
  const [filter, setFilter] = useState({ text: "" });

  const setDataForCurrentDay = useSelector(setDataForCurrentDayData);
  const state = useSelector(stateData);
  const data = useSelector(Userdata);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = Data(setDataForCurrentDay, filter);

    if (filter.text && filter.text !== "" && filter.text.length > 1) {
      const result = data.concat(newData);
      dispatch(AddTodo(result));
      setFilter("");
      setOpen(!open);
    }
  };
  return { handleSubmit, state, handleChange };
}

export default DataCreator;
