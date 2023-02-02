// import { legacy_createStore as createStore } from "redux";
// import { configureStore } from "@reduxjs/toolkit";

import { createStore } from "redux";

import rootReducer from "./reducers";

const store = createStore(rootReducer);

export default store;
