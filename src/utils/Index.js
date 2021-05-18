import { createStore } from "redux";
import Index from "../reducers/Index";

const Save = (state) => {
  try {
    const Save = JSON.stringify(state);
    localStorage.setItem("CONTEXT", Save);
  } catch (err) {
    throw err;
  }
};

const Load = () => {
  try {
    const Load = localStorage.getItem("CONTEXT");
    if (Load === null) return undefined;
    return JSON.parse(Load);
  } catch (err) {
    throw err;
  }
};

const Store = createStore(Index, Load());

Store.subscribe(() => Save(Store.getState()));

export default Store;
