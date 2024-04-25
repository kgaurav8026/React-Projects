import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterSlice from "../components/Counter";
import privacySlice from "../components/Privacy";
const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  },
});

export default counterStore;

/*const INITIAL_VALUE = {
    counter: 0,
    privacy: false,
  };*/

/*const counterReducer = (store = INITIAL_VALUE, action) => {
  if (action.type === "INCREMENT") {
    return { counter: store.counter + 1, privacy: store.privacy };
  } else if (action.type === "DECREMENT") {
    return { counter: store.counter - 1, privacy: store.privacy };
  } else if (action.type === "ADD") {
    return {
      counter: store.counter + Number(action.payload.num),
      privacy: store.privacy,
    };
  } else if (action.type === "SUB") {
    return {
      counter: store.counter - Number(action.payload.num),
      privacy: store.privacy,
    };
  } else if (action.type === "TOGGLE") {
    return { counter: store.counter, privacy: !store.privacy };
  }
  return store;
};*/
