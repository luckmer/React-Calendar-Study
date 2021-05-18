import { nanoid } from "@reduxjs/toolkit";

export const Data = (setDataForCurrentDay, filter) => {
  const {
    currentUserClickedDay,
    currentUserClickedMonth,
    currentUserClickedYear,
    ID,
  } = setDataForCurrentDay;

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
  return newData;
};
