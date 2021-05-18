import { AddTodo, Userdata } from "../../reducers/ToDoSlice";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export function Buttons(id, setState, state) {
  const userData = useSelector(Userdata),
    check = new URLSearchParams(window.location.search).get("proxy"),
    dispatch = useDispatch(),
    history = useHistory();

  const Update = (state) => {
    const updatedPost = userData.map((item) => {
      if (id === item._id && item.id === parseFloat(check)) {
        return {
          ...item,
          colorType: state.color ? state.color : item.colorType,
          description: state.description ? state.description : item.description,
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

  return { SetColor, handleSubmit, DeletePost };
}
