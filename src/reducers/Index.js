import { combineReducers } from "redux";
import DataSlice from "./DataSlice";
import ToDoSlice from "./ToDoSlice";
const Index = combineReducers({
    data: DataSlice,
    array: ToDoSlice,
});

export default Index;
