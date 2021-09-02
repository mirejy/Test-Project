import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { rootReducer } from "./store/reducers";

export const GET_CURRECNCY_PRICE_ONE_B = "GET_CURRECNCY_PRICE_ONE_B",
  GET_CURRECNCY_PRICE_TWO_B = "GET_CURRECNCY_PRICE_TWO_B",
  GET_CURRECNCY_PRICE_HOSTEL = "GET_CURRECNCY_PRICE_HOSTEL";

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
