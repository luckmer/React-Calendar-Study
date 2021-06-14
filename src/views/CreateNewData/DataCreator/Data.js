import { nanoid } from "@reduxjs/toolkit";

export const Data = (
  currentUserClickedDay,
  currentUserClickedMonth,
  currentUserClickedYear,
  ID,
  filter
) => {
  const newData = {
    filter,
    id: ID + 1,
    description: "",
    colorType: "#f00049",
    day: currentUserClickedDay,
    month: currentUserClickedMonth,
    year: currentUserClickedYear,
    _id: nanoid(),
  };

  return newData;
};
