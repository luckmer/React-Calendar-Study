import { useDispatch } from "react-redux";
import { updateArray } from "../../reducers/ToDoSlice";

const Drag = () => {
  const dispatch = useDispatch();

  const NoteDragOver = (e) => e.preventDefault();

  const OnDropContainer = (e) => {
    if (
      (!e.target.classList.contains("sc-kEjbxe") &&
        !e.target.classList.contains("kdczwX") &&
        e.target.id !== "block") ||
      (e.target.classList.value !== "" && e.target.id !== "block")
    ) {
      const id = e.dataTransfer.getData("id");
      const target = e.target.id;

      dispatch(updateArray({ id, target }));
    }
  };

  const NoteDragStart = (e, obj) => e.dataTransfer.setData("id", obj);

  return { NoteDragOver, OnDropContainer, NoteDragStart };
};
export default Drag;
