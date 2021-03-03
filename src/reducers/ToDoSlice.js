import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newContent: [],
    FilterResult: [],
};

const ToDoSlice = createSlice({
    name: "array",
    initialState,
    reducers: {
        AddTodo: (state, action) => {
            state.newContent = action.payload;
        },
        FilterUpdate: (state, action) => {
            state.FilterResult = action.payload;
        },
    },
});

export const { AddTodo, FilterUpdate } = ToDoSlice.actions;

export const Userdata = (state) => state.array.newContent;
export const findById = (state) => state.array.FilterResult;

export default ToDoSlice.reducer;
