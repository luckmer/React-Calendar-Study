import React from "react";
import { useSelector } from "react-redux";
import Toggle from "./Toggle";

function P(props) {
  const state = useSelector((state) => state.data);
  const toggleMonths = Toggle(state);

  return <p onClick={() => toggleMonths(props.type)}>{props.children}</p>;
}

export default P;
