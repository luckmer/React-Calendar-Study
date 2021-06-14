import { useDispatch } from "react-redux";
import { updateArray } from "../../reducers/ToDoSlice";

const Drag = () => {
  const dispatch = useDispatch();
  const NoteDragOver = (e) => e.preventDefault();

  const OnDropContainer = (e) => {
    const E = e.target.classList;
    const target = e.target;
    const InValid = ["kdczwX", "sc-kEjbxe", "sc-iqAclL", "sc-jrsJWt", "kjWaVd"];

    const Block = InValid.includes(E[0]) || InValid.includes(E[1]);
    const test = Number(target.id) !== -99;

    if (!Block || (!Block && target.id !== "block")) {
      if (test && E.value !== "") {
        const id = e.dataTransfer.getData("id");
        const target = e.target.id;
        dispatch(updateArray({ id, target }));
      }
    }
  };

  const NoteDragStart = (e, obj) => e.dataTransfer.setData("id", obj);

  return { NoteDragOver, OnDropContainer, NoteDragStart };
};
export default Drag;
