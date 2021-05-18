import { Userdata, findById } from "../../reducers/ToDoSlice";
import { useSelector } from "react-redux";
import { ColorData } from "../../reducers/DataSlice";

export function TextDesign(id) {
  const colors = useSelector(ColorData),
    userData = useSelector(Userdata),
    FindById = useSelector(findById),
    ForUserDataFilter = userData.find((i) => i._id === id),
    apiDataView = FindById.find((i) => i._id === id);

  const typeText = ForUserDataFilter ? ForUserDataFilter.description : "";
  const typeColor = ForUserDataFilter ? ForUserDataFilter.colorType : "";
  return { apiDataView, typeColor, colors, typeText };
}
