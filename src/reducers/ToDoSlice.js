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

    updateArray: (state, action) => {
      const { id, target } = action.payload;
      console.log(id, target);
      let ApiControl = state.newContent.find(({ _id }) => _id === id);

      if (ApiControl) {
        ApiControl.id = Number(target);
        ApiControl.day = target;
      }
    },
  },
});

export const { AddTodo, FilterUpdate, updateArray } = ToDoSlice.actions;

export const Userdata = (state) => state.array.newContent;
export const findById = (state) => state.array.FilterResult;

export default ToDoSlice.reducer;
