import { createStore } from "redux";
const INITIAL_VALUE = {
  counter: 0,
  toggle: false,
};
const counterReducer = (store = INITIAL_VALUE, action) => {
  if (action.type === "INCREMENT") {
    return { counter: store.counter + 1, toggle: store.toggle };
  } else if (action.type === "DECREMENT") {
    return { counter: store.counter - 1, toggle: store.toggle };
  } else if (action.type === "ADD") {
    return {
      counter: store.counter + Number(action.payload.num),
      toggle: store.toggle,
    };
  } else if (action.type === "SUB") {
    return {
      counter: store.counter - Number(action.payload.num),
      toggle: store.toggle,
    };
  } else if (action.type === "TOGGLE") {
    return { counter: store.counter, toggle: !store.toggle };
  }
  return store;
};

const counterStore = createStore(counterReducer);

export default counterStore;
