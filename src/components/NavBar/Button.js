import React from "react";
import Toggle from "./Toggle";
import { useSelector } from "react-redux";

function Button(props) {
  const state = useSelector((state) => state.data);
  const toggleMonths = Toggle(state);

  return (
    <button onClick={() => toggleMonths(props.type)}>{props.children}</button>
  );
}

export default Button;
